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

    const CLOUD_API_URL = 'https://crudcrud.com/api/0311bb6e949b497eb06aa560bbb7d947/orders';

    // --- INITIALIZATION ---
    function init() {
        setupBroadcastChannel();
        renderAll();
        setupEventListeners();
        initQRGenerator();
        startCloudOrderPolling();
    }

    // --- CLOUD MULTI-DEVICE REAL-TIME POLLING ---
    function startCloudOrderPolling() {
        setInterval(pollCloudOrders, 3000);
        pollCloudOrders();
    }

    function pollCloudOrders() {
        fetch(CLOUD_API_URL)
            .then(res => res.json())
            .then(remoteOrders => {
                if (Array.isArray(remoteOrders)) {
                    let hasNewOrders = false;

                    remoteOrders.forEach(remoteOrder => {
                        const localIndex = orders.findIndex(o => o.orderId === remoteOrder.orderId);
                        if (localIndex === -1) {
                            orders.unshift(remoteOrder);
                            hasNewOrders = true;
                        }
                    });

                    if (hasNewOrders) {
                        localStorage.setItem('adda_orders', JSON.stringify(orders));
                        renderAll();
                        if (isAudioChimeEnabled) {
                            playKitchenChimeSound();
                        }
                    }
                }
            })
            .catch(err => console.log('Cloud poll error:', err));
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

                <div class="order-guest-info" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px;">
                    <div><i class="fa-solid fa-user"></i> <strong>${order.guestName || 'Potluck Guest'}</strong></div>
                    <div style="background: rgba(197, 160, 89, 0.2); border: 1px solid var(--admin-border-gold); padding: 2px 8px; border-radius: 4px; font-weight: 700; color: var(--admin-border-gold); font-size: 0.82rem;">
                        <i class="fa-solid fa-ticket"></i> Token: ${order.orderId}
                    </div>
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
                    syncOrdersToCloud();
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
                syncOrdersToCloud();
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

    // --- ON-SPOT FOOD ORDERING QR CODE GENERATOR & POSTER PRINTER ---
    function initQRGenerator() {
        const qrTableSelect = document.getElementById('qrTableSelect');
        const customTableInputGroup = document.getElementById('customTableInputGroup');
        const customTableNameInput = document.getElementById('customTableNameInput');
        const qrBaseUrlInput = document.getElementById('qrBaseUrlInput');
        const qrPreapplyPromo = document.getElementById('qrPreapplyPromo');
        const generatedUrlOutput = document.getElementById('generatedUrlOutput');
        const qrCodeContainer = document.getElementById('qrCodeContainer');
        const standeeTableBadge = document.getElementById('standeeTableBadge');
        
        const downloadQRBtn = document.getElementById('downloadQRBtn');
        const printStandeeBtn = document.getElementById('printStandeeBtn');
        const copyQRLinkBtn = document.getElementById('copyQRLinkBtn');

        if (!qrTableSelect || !qrCodeContainer) return;

        // Set default base url to customer index page
        let currentUrl = window.location.href.split('#')[0].split('?')[0];
        let defaultMenuUrl = currentUrl.replace('admin.html', 'index.html');
        if (!defaultMenuUrl.includes('index.html')) {
            defaultMenuUrl = defaultMenuUrl.replace(/\/$/, '') + '/index.html';
        }
        qrBaseUrlInput.value = defaultMenuUrl;

        function getActiveLocationName() {
            if (qrTableSelect.value === 'CUSTOM') {
                return (customTableNameInput.value.trim() || 'On-Spot Food Order');
            }
            return qrTableSelect.value;
        }

        function generateQR() {
            const locationVal = getActiveLocationName();
            const baseUrl = qrBaseUrlInput.value.trim() || defaultMenuUrl;
            const applyPromo = qrPreapplyPromo.checked;

            try {
                const finalUrl = new URL(baseUrl, window.location.href);
                finalUrl.searchParams.set('spot', '1');
                finalUrl.searchParams.set('src', locationVal);
                if (applyPromo) {
                    finalUrl.searchParams.set('promo', 'INDOITALIA10');
                }

                const targetUrlStr = finalUrl.toString();
                generatedUrlOutput.value = targetUrlStr;
                standeeTableBadge.textContent = locationVal.toUpperCase();

                // Clear previous QR Code
                qrCodeContainer.innerHTML = '';

                if (typeof QRCode !== 'undefined') {
                    new QRCode(qrCodeContainer, {
                        text: targetUrlStr,
                        width: 180,
                        height: 180,
                        colorDark: "#2d1228",
                        colorLight: "#ffffff",
                        correctLevel: QRCode.CorrectLevel.H
                    });
                } else {
                    renderFallbackCanvasQR(qrCodeContainer, targetUrlStr);
                }
            } catch (e) {
                console.error("QR Code error", e);
                renderFallbackCanvasQR(qrCodeContainer, baseUrl);
            }
        }

        function renderFallbackCanvasQR(container, text) {
            container.innerHTML = '';
            const canvas = document.createElement('canvas');
            canvas.width = 180;
            canvas.height = 180;
            const ctx = canvas.getContext('2d');
            
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, 180, 180);

            ctx.fillStyle = '#2d1228';
            ctx.fillRect(10, 10, 50, 50);
            ctx.fillRect(120, 10, 50, 50);
            ctx.fillRect(10, 120, 50, 50);

            ctx.fillStyle = '#ffffff';
            ctx.fillRect(20, 20, 30, 30);
            ctx.fillRect(130, 20, 30, 30);
            ctx.fillRect(20, 130, 30, 30);

            ctx.fillStyle = '#2d1228';
            ctx.fillRect(30, 30, 10, 10);
            ctx.fillRect(140, 30, 10, 10);
            ctx.fillRect(30, 140, 10, 10);

            ctx.fillStyle = '#2d1228';
            ctx.font = 'bold 11px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('SCAN TO ORDER', 90, 95);

            container.appendChild(canvas);
        }

        qrTableSelect.addEventListener('change', () => {
            if (qrTableSelect.value === 'CUSTOM') {
                customTableInputGroup.style.display = 'block';
            } else {
                customTableInputGroup.style.display = 'none';
            }
            generateQR();
        });

        customTableNameInput.addEventListener('input', generateQR);
        qrBaseUrlInput.addEventListener('input', generateQR);
        qrPreapplyPromo.addEventListener('change', generateQR);

        downloadQRBtn.addEventListener('click', () => {
            const locationVal = getActiveLocationName();
            let qrImg = qrCodeContainer.querySelector('img') || qrCodeContainer.querySelector('canvas');
            
            if (!qrImg) return;

            let dataUrl = '';
            if (qrImg.tagName.toLowerCase() === 'img') {
                dataUrl = qrImg.src;
            } else {
                dataUrl = qrImg.toDataURL('image/png');
            }

            const a = document.createElement('a');
            a.href = dataUrl;
            a.download = `IndoItalianAdda_OnSpotQR_${locationVal.replace(/\s+/g, '_')}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });

        copyQRLinkBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(generatedUrlOutput.value).then(() => {
                alert('On-Spot Food Order URL copied to clipboard!');
            });
        });

        printStandeeBtn.addEventListener('click', () => {
            const locationVal = getActiveLocationName();
            const printWin = window.open('', '_blank', 'width=800,height=900');
            printWin.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>On-Spot Food Order Poster - ${locationVal}</title>
                    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Montserrat:wght@500;700&display=swap" rel="stylesheet">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
                    <style>
                        body { margin: 0; padding: 40px; background: #fdfaf5; font-family: 'Montserrat', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
                        .standee-card { width: 380px; border: 4px double #c5a059; background: #2d1228; color: #fff; padding: 36px 28px; text-align: center; border-radius: 18px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
                        .title { font-family: 'Cinzel', serif; color: #d4af37; font-size: 1.9rem; margin: 0; letter-spacing: 1px; }
                        .subtitle { color: #f5edd8; font-size: 0.88rem; font-style: italic; margin-top: 4px; margin-bottom: 20px; }
                        .badge { background: #c5a059; color: #1a0817; font-weight: 800; font-size: 1.1rem; padding: 8px 20px; border-radius: 30px; display: inline-block; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1.5px; }
                        .qr-box { background: #fff; padding: 18px; border-radius: 14px; display: inline-block; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
                        .qr-box img, .qr-box canvas { width: 210px; height: 210px; display: block; margin: 0 auto; }
                        .instructions { font-weight: 800; font-size: 1.15rem; color: #d4af37; margin: 0 0 6px 0; }
                        .sub-instructions { font-size: 0.85rem; color: #dedede; line-height: 1.4; }
                        .step-pill { background: rgba(255,255,255,0.1); border: 1px solid rgba(212,175,55,0.4); padding: 4px 10px; border-radius: 6px; font-size: 0.78rem; display: inline-block; margin-top: 8px; }
                        @media print { body { padding: 0; background: none; } }
                    </style>
                </head>
                <body>
                    <div class="standee-card">
                        <div style="font-size: 0.75rem; letter-spacing: 2px; color: #c5a059;">NAMMA PURPLE'S</div>
                        <h1 class="title">INDO-ITALIAN ADDA</h1>
                        <p class="subtitle">Italian Flair; Indian Alchemy</p>
                        <div class="badge"><i class="fa-solid fa-qrcode"></i> ${locationVal.toUpperCase()}</div>
                        <div class="qr-box">${qrCodeContainer.innerHTML}</div>
                        <p class="instructions"><i class="fa-solid fa-mobile-screen-button"></i> SCAN TO ORDER FOOD ON-SPOT</p>
                        <p class="sub-instructions">Scan with your smartphone camera → Select dishes & order live → Show your Order Token at the counter for pickup.</p>
                        <div class="step-pill">✨ Instant Mobile Food Ordering System ✨</div>
                    </div>
                    <script>
                        window.onload = function() { setTimeout(function(){ window.print(); }, 500); };
                    </script>
                </body>
                </html>
            `);
            printWin.document.close();
        });

        generateQR();
    }

    // Start Admin Dashboard
    init();
});
