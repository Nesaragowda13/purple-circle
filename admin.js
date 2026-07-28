/* ==========================================================================
   NAMMA PURPLE'S INDO-ITALIAN ADDA - ADMIN & KITCHEN DASHBOARD LOGIC
   Real-Time Order Listening, Audio Alerts, Stock & Analytics Manager
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- STATE MANAGEMENT ---
    let orders = JSON.parse(localStorage.getItem('adda_orders') || '[]');
    let stockStatus = JSON.parse(localStorage.getItem('adda_stock_status') || '{}');
    let currentStatusFilter = 'all';
    let searchQuery = '';
    let isAudioChimeEnabled = true;
    let broadcastChannel = null;

    // --- DOM ELEMENTS ---
    const ordersGrid = document.getElementById('ordersGrid');
    const noOrdersState = document.getElementById('noOrdersState');
    const metricTotalOrders = document.getElementById('metricTotalOrders');
    const metricActiveOrders = document.getElementById('metricActiveOrders');
    const metricTotalRevenue = document.getElementById('metricTotalRevenue');
    const metricPopularDish = document.getElementById('metricPopularDish');
    const orderSearchInput = document.getElementById('orderSearchInput');
    const clearAllOrdersBtn = document.getElementById('clearAllOrdersBtn');
    const toggleAudioChimeBtn = document.getElementById('toggleAudioChimeBtn');
    const stockTableBody = document.getElementById('stockTableBody');
    const reportSummaryContent = document.getElementById('reportSummaryContent');
    const exportReportBtn = document.getElementById('exportReportBtn');

    const adminTabBtns = document.querySelectorAll('.admin-tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const orderFilterPills = document.querySelectorAll('.order-filter-pill');

    // --- INITIALIZATION ---
    function init() {
        setupBroadcastChannel();
        renderAll();
        setupEventListeners();
    }

    // --- REAL-TIME BROADCAST CHANNEL & STORAGE LISTENER ---
    function setupBroadcastChannel() {
        try {
            if ('BroadcastChannel' in window) {
                broadcastChannel = new BroadcastChannel('adda_orders_channel');
                broadcastChannel.onmessage = (event) => {
                    if (event.data && event.data.type === 'NEW_ORDER') {
                        handleNewIncomingOrder(event.data.order);
                    } else if (event.data && event.data.type === 'STATUS_UPDATE') {
                        reloadOrdersFromStorage();
                    }
                };
            }
        } catch (e) {
            console.log('BroadcastChannel not supported fallback to storage event', e);
        }

        window.addEventListener('storage', (e) => {
            if (e.key === 'adda_orders') {
                reloadOrdersFromStorage();
            }
        });
    }

    function reloadOrdersFromStorage() {
        orders = JSON.parse(localStorage.getItem('adda_orders') || '[]');
        renderAll();
    }

    function handleNewIncomingOrder(newOrder) {
        orders = JSON.parse(localStorage.getItem('adda_orders') || '[]');
        if (isAudioChimeEnabled) {
            playKitchenChimeSound();
        }
        renderAll();
    }

    // --- RENDER EVERYTHING ---
    function renderAll() {
        renderMetrics();
        renderOrdersGrid();
        renderStockTable();
        renderReport();
        updateStatusFilterCounts();
    }

    // --- METRICS ---
    function renderMetrics() {
        metricTotalOrders.textContent = orders.length;
        
        const activeCount = orders.filter(o => o.status === 'NEW' || o.status === 'PREPARING').length;
        metricActiveOrders.textContent = activeCount;

        const totalRev = orders.reduce((sum, o) => sum + (o.totalPrice || 0), 0);
        metricTotalRevenue.textContent = `₹${totalRev}`;

        // Calculate most popular item
        const itemFreq = {};
        orders.forEach(o => {
            if (o.items) {
                o.items.forEach(i => {
                    const name = i.italianName || i.name;
                    itemFreq[name] = (itemFreq[name] || 0) + i.qty;
                });
            }
        });

        let topDish = 'None Yet';
        let maxCount = 0;
        for (let name in itemFreq) {
            if (itemFreq[name] > maxCount) {
                maxCount = itemFreq[name];
                topDish = `${name} (${maxCount})`;
            }
        }
        metricPopularDish.textContent = topDish;
    }

    // --- RENDER ORDERS GRID ---
    function renderOrdersGrid() {
        ordersGrid.innerHTML = '';

        const filtered = orders.filter(order => {
            const matchesStatus = (currentStatusFilter === 'all') || (order.status === currentStatusFilter);
            const matchesSearch = searchQuery === '' || 
                order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (order.guestName && order.guestName.toLowerCase().includes(searchQuery.toLowerCase()));

            return matchesStatus && matchesSearch;
        });

        if (filtered.length === 0) {
            noOrdersState.style.display = 'block';
            return;
        }

        noOrdersState.style.display = 'none';

        // Sort newest first
        filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        filtered.forEach(order => {
            const card = document.createElement('div');
            card.className = `order-card status-${order.status}`;

            const itemsRows = order.items.map(item => `
                <tr>
                    <td class="item-name">${item.italianName} <small>(${item.indianAlias})</small></td>
                    <td class="item-qty">x${item.qty}</td>
                    <td class="item-price">₹${item.price * item.qty}</td>
                </tr>
            `).join('');

            const timeString = new Date(order.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            card.innerHTML = `
                <div class="order-card-header">
                    <div>
                        <div class="order-id">${order.orderId}</div>
                        <div class="order-timestamp"><i class="fa-solid fa-clock"></i> ${timeString}</div>
                    </div>
                    <span class="status-badge badge-${order.status}">${order.status}</span>
                </div>

                <div class="order-guest-info">
                    <i class="fa-solid fa-user"></i> ${order.guestName || 'Potluck Guest'}
                </div>

                <table class="order-items-table">
                    <tbody>${itemsRows}</tbody>
                </table>

                <div class="order-card-footer">
                    <div class="order-total-price">Total: ₹${order.totalPrice}</div>
                    <select class="status-select" data-order-id="${order.orderId}">
                        <option value="NEW" ${order.status === 'NEW' ? 'selected' : ''}>NEW</option>
                        <option value="PREPARING" ${order.status === 'PREPARING' ? 'selected' : ''}>PREPARING</option>
                        <option value="SERVED" ${order.status === 'SERVED' ? 'selected' : ''}>SERVED</option>
                        <option value="CANCELLED" ${order.status === 'CANCELLED' ? 'selected' : ''}>CANCELLED</option>
                    </select>
                </div>
            `;

            ordersGrid.appendChild(card);
        });
    }

    function updateStatusFilterCounts() {
        const counts = {
            NEW: orders.filter(o => o.status === 'NEW').length,
            PREPARING: orders.filter(o => o.status === 'PREPARING').length,
            SERVED: orders.filter(o => o.status === 'SERVED').length,
        };

        const liveCount = orders.filter(o => o.status === 'NEW' || o.status === 'PREPARING').length;
        document.getElementById('count-live-orders').textContent = liveCount;

        for (let key in counts) {
            const el = document.getElementById(`status-count-${key.toLowerCase()}`);
            if (el) el.textContent = counts[key];
        }
    }

    // --- STOCK MANAGER ---
    function renderStockTable() {
        if (!stockTableBody) return;
        stockTableBody.innerHTML = '';

        // Get dishes from window.menuData initialized in app.js
        const dishes = window.addaMenuData || [];

        dishes.forEach(dish => {
            const isSoldOut = stockStatus[dish.id] === 'SOLDOUT';
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><span class="dish-category-badge">${dish.category}</span></td>
                <td style="font-weight: 700; color: #fff;">${dish.italianName}</td>
                <td style="font-style: italic;">(${dish.indianAlias})</td>
                <td>₹${dish.price}</td>
                <td>
                    <span style="color: ${isSoldOut ? '#dc2626' : '#4ade80'}; font-weight: 700;">
                        ${isSoldOut ? 'SOLD OUT' : 'IN STOCK'}
                    </span>
                </td>
                <td>
                    <button class="btn btn-secondary btn-sm toggle-stock-btn" data-id="${dish.id}">
                        ${isSoldOut ? 'Mark In Stock' : 'Mark Sold Out'}
                    </button>
                </td>
            `;
            stockTableBody.appendChild(tr);
        });
    }

    // --- REPORT SUMMARY ---
    function renderReport() {
        if (!reportSummaryContent) return;

        if (orders.length === 0) {
            reportSummaryContent.innerHTML = `<p style="color: var(--admin-text-muted);">No sales data available yet.</p>`;
            return;
        }

        let totalRev = 0;
        const dishSales = {};

        orders.forEach(o => {
            totalRev += (o.totalPrice || 0);
            if (o.items) {
                o.items.forEach(i => {
                    const name = `${i.italianName} (${i.indianAlias})`;
                    dishSales[name] = (dishSales[name] || 0) + i.qty;
                });
            }
        });

        let html = `
            <div style="margin-bottom: 16px;">
                <h4>Event Financial Overview</h4>
                <p style="font-size: 1.2rem; font-weight: 700; color: var(--admin-border-gold); margin-top: 4px;">
                    Total Orders: ${orders.length} | Revenue Generated: ₹${totalRev}
                </p>
            </div>
            <h4>Dishes Sold Breakdown</h4>
            <ul style="list-style: none; margin-top: 8px;">
        `;

        for (let dish in dishSales) {
            html += `<li style="padding: 6px 0; border-bottom: 1px dashed rgba(255,255,255,0.1);">
                <strong style="color: #fff;">${dish}</strong>: ${dishSales[dish]} portions sold
            </li>`;
        }

        html += `</ul>`;
        reportSummaryContent.innerHTML = html;
    }

    // --- EVENT LISTENERS ---
    function setupEventListeners() {
        // Tab switching
        adminTabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                adminTabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.style.display = 'none');

                btn.classList.add('active');
                const targetId = `tab-${btn.dataset.tab}`;
                document.getElementById(targetId).style.display = 'block';
            });
        });

        // Status Filter Pills
        orderFilterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                orderFilterPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                currentStatusFilter = pill.dataset.status;
                renderOrdersGrid();
            });
        });

        // Search Input
        orderSearchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            renderOrdersGrid();
        });

        // Status Select Dropdown inside Order Cards
        ordersGrid.addEventListener('change', (e) => {
            if (e.target.classList.contains('status-select')) {
                const orderId = e.target.dataset.orderId;
                const newStatus = e.target.value;

                const order = orders.find(o => o.orderId === orderId);
                if (order) {
                    order.status = newStatus;
                    localStorage.setItem('adda_orders', JSON.stringify(orders));

                    if (broadcastChannel) {
                        broadcastChannel.postMessage({ type: 'STATUS_UPDATE', orderId, newStatus });
                    }
                    renderAll();
                }
            }
        });

        // Stock Toggle
        if (stockTableBody) {
            stockTableBody.addEventListener('click', (e) => {
                const toggleBtn = e.target.closest('.toggle-stock-btn');
                if (toggleBtn) {
                    const dishId = toggleBtn.dataset.id;
                    stockStatus[dishId] = stockStatus[dishId] === 'SOLDOUT' ? 'INSTOCK' : 'SOLDOUT';
                    localStorage.setItem('adda_stock_status', JSON.stringify(stockStatus));
                    renderStockTable();
                }
            });
        }

        // Toggle Audio Chime
        toggleAudioChimeBtn.addEventListener('click', () => {
            isAudioChimeEnabled = !isAudioChimeEnabled;
            toggleAudioChimeBtn.innerHTML = `<i class="fa-solid fa-bell"></i> Audio Alert: ${isAudioChimeEnabled ? 'On' : 'Off'}`;
        });

        // Clear All Orders
        clearAllOrdersBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear the entire kitchen orders log?')) {
                orders = [];
                localStorage.setItem('adda_orders', JSON.stringify(orders));
                renderAll();
            }
        });

        // Copy Report
        if (exportReportBtn) {
            exportReportBtn.addEventListener('click', () => {
                const text = reportSummaryContent.innerText;
                navigator.clipboard.writeText(text).then(() => {
                    alert('Potluck sales & inventory summary report copied to clipboard!');
                });
            });
        }
    }

    // --- KITCHEN DING AUDIO CHIME ---
    function playKitchenChimeSound() {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            const ctx = new AudioContext();

            // Double bell ding (E5 & B5)
            const playBell = (freq, time) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, time);

                gain.gain.setValueAtTime(0.3, time);
                gain.gain.exponentialRampToValueAtTime(0.001, time + 0.8);

                osc.connect(gain);
                gain.connect(ctx.destination);

                osc.start(time);
                osc.stop(time + 0.8);
            };

            playBell(659.25, ctx.currentTime);
            playBell(987.77, ctx.currentTime + 0.2);
        } catch (e) {
            console.log('Audio chime error:', e);
        }
    }

    // Start Admin Dashboard
    init();
});
