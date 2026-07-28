# Namma Purple's Indo-Italian Adda 🇮🇳🇮🇹

> **Italian Flair; Indian Alchemy**

An interactive, high-aesthetic digital menu poster & real-time kitchen administration portal for the Indo-Italian potluck event.

---

## 🌟 Key Features

### 📜 1. Vintage Poster Menu Card (`index.html`)
- **Authentic Visual Aesthetic**: Designed with an aged parchment paper system, double dark woodcut borders, gold filigree frames, and dual Italian & Indian flag headers.
- **Dual Language Item Names**: Each item features its authentic Italian culinary title alongside its popular Indian name (e.g., `FRITTELLE DI LENTICCHIE` / *Curd Vada*).
- **Curated High-Res Dishes & Vector SVGs**: All 16 items feature custom enhanced food photography backed by handcrafted woodcut SVG vector fallbacks.
- **Potluck Guest Order Drawer**: Guests can select item quantities, enter their guest name, and submit orders live.

### 👨‍🍳 2. Kitchen & Admin Live Dashboard (`admin.html`)
- **Real-Time Order Listening**: Powered by `BroadcastChannel` and `localStorage` synchronization for instant kitchen order popups without page reloads.
- **Audio Chime Notification**: Sound chime notification on new guest orders.
- **Order Lifecycle Workflow**: `NEW` ➔ `PREPARING` ➔ `SERVED` ➔ `CANCELLED`.
- **Live Event Metrics**: Real-time analytics tracking **Total Orders**, **Active Kitchen Orders**, **Total Revenue (₹)**, and **Most Popular Dish**.
- **Menu Stock Control**: Toggle item availability (`In Stock` / `Sold Out`) dynamically.

---

## 🍽️ Menu Highlights

- **Starters**: Frittelle Di Lenticchie (*Curd Vada*), Bruschetta Al Pomodoro (*Bruschetta*), Sferette Croccanti Speziate (*Panipuri*).
- **Italian Mains**: Pasta Italiana, Piadina Romagnola (*Italian Flatbread*).
- **Indian Mains**: Risotto Al Pollo Speziato (*Chicken Biryani*), Riso Freddo Allo Yogurt (*Curd Rice*), Riso Al Mango Agro-Piccante (*Mango Puliyogare*), Crespelle Sottili (*Neer Dosa & Chicken Curry*), Tortino Di Riso (*Puttu & Kadale Curry*), Involtini Dolci (*Neer Dosa Kaibella Roll*).
- **Desserts**: Composta Di Albicocche (*Kurbani Ka Meetha*), Tartufini Dolci Di Miglio (*Pearl Millet Ladoo*), Indo-Italian Panna Cotta, Budino Dolce Al Cocco (*Coconut Payasa*).
- **Beverages**: Na nariCo Tequila Sparkle (*Elaneer Nannari Sarbath*).

---

## 🚀 Running Locally

Serve the directory with any HTTP web server:

```bash
python -m http.server 8085
```

Open:
- **Customer Menu**: `http://localhost:8085/index.html`
- **Kitchen Admin Portal**: `http://localhost:8085/admin.html`
