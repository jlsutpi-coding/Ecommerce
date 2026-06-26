# 🛒 Modern React E-Commerce Application

A premium, fully-featured, and highly responsive E-Commerce web application built using **React 19**, **React Router 7**, **Redux Toolkit**, and **Tailwind CSS v4**.

This application connects to the **DummyJSON API** to fetch and manage dynamic product data. It includes interactive elements like dark/light theme switching, full-text product search, category filtering, a paginated catalog, product details, a wishlist/watchlist, shopping cart calculations, a checkout form, and an order confirmation summary.

---

## 🔗 Live Links & Demos

- **Production Deployment URL:** [https://ecommerce-three-gules.vercel.app/](https://ecommerce-three-gules.vercel.app/)
- **Source Code Repository:** [https://github.com/jlsutpi-coding/Ecommerce](https://github.com/jlsutpi-coding/Ecommerce)
- **Backend API Source:** [DummyJSON API](https://dummyjson.com)

---

## ✨ Features

- **⚡ Paginated Product Catalog:** Browse a list of products retrieved dynamically from the API with page navigation support (`limit` and `skip`).
- **🏷️ Category Browsing:** Filter items dynamically using categories loaded straight from the API.
- **🔍 Full-Text Search:** Instantly search products by title or keyword.
- **🛍️ Cart Management (Redux):** Add and remove items, adjust quantities, and watch the order summary update subtotal, tax, and total price in real-time.
- **❤️ Watchlist / Favorites (Redux):** Save products to your watchlist to keep track of items you like.
- **📄 Detailed Product Views:** Dive deep into descriptions, ratings, pricing, and images for individual items.
- **💳 Checkout Simulator:** Fill in shipping and payment details with dynamic calculations and step-by-step layout.
- **🎉 Order Success page:** View an elegant order receipt layout summary after completing checkout.
- **🌓 Global Dark/Light Theme:** Toggle system-wide styling via React Context and Tailwind classes.
- **📱 Fully Responsive Web Design:** Fluid layouts optimized for desktop, tablet, and mobile displays.

---

## 🧰 Tech Stack

| Technology                      | Version              | Purpose                                                  |
| :------------------------------ | :------------------- | :------------------------------------------------------- |
| **React**                       | `v19.2.0`            | UI Component Library                                     |
| **React Router**                | `v7.13.2`            | Client-Side Routing and Navigation                       |
| **Redux Toolkit & React-Redux** | `v2.11.2` / `v9.2.0` | Global State Management (Cart & Watchlist)               |
| **React Context API**           | Native               | Light/Dark Theme State propagation                       |
| **Tailwind CSS**                | `v4.2.2`             | CSS Design System & Utility-first Styles                 |
| **Vite**                        | `v7.2.2`             | Next-generation Frontend Build Tool & Development Server |
| **React Icons**                 | `v5.6.0`             | Icon sets used across the interface                      |
| **React Hot Toast**             | `v2.6.0`             | Notifications and toast messages for user actions        |

---

## 🌐 API & Routing Configuration

The app fetches mock product data from **DummyJSON**. To prevent mixed content warnings, bypass CORS issues, and secure requests, it employs proxy routing both locally and in production.

### Local Development Proxy (`vite.config.js`)

Vite redirects all calls starting with `/api` to the upstream DummyJSON server:

```javascript
server: {
  port: 3000,
  proxy: {
    "/api": {
      target: "https://dummyjson.com",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
}
```

### Production Rewrites (`vercel.json`)

When deployed to Vercel, the rewrites rules redirect API routes to the same external service:

```json
{
  "rewrites": [
    { "source": "/api/(.*)", "destination": "https://dummyjson.com/$1" },
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## 📂 Folder Structure

```text
ecommerce/
├── src/
│   ├── components/       # Reusable UI elements (Header, Footer, Product Cards)
│   ├── context/          # Theme context (Light/Dark mode)
│   ├── layout/           # Main app layout wrap (Navbar, Body wrapper)
│   ├── pages/            # Page-level components
│   │   ├── Home/         # Home page & Category filters
│   │   ├── Product/      # Detail view for single products
│   │   ├── cart/         # Cart display & calculations
│   │   ├── checkout/     # Checkout form & payments
│   │   ├── order-success/# Order summary receipt screen
│   │   ├── watchlist/    # Watchlist/Favorites page
│   │   └── NotFound/     # 404 error page
│   ├── redux/            # State management setup
│   │   ├── app/          # Store setup (`store.js`)
│   │   └── features/     # Slices (product, cart, watchlist, search)
│   ├── utils/            # Helper utilities and formatting
│   ├── App.jsx           # Application routing layout
│   ├── main.jsx          # App entrypoint
│   └── index.css         # Tailwind directives and base styles
├── vercel.json           # Vercel routing configurations
├── vite.config.js        # Vite configs and proxy settings
├── package.json          # Node dependencies and build scripts
└── README.md             # Project documentation
```

---

## 🚀 Getting Started

To run this application locally, ensure you have [Node.js](https://nodejs.org/) installed.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ecommerce.git
cd ecommerce
```

### 2. Install dependencies

Using **pnpm** (recommended based on project config):

```bash
pnpm install
```

_Or using **npm** / **yarn**:_

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server

```bash
pnpm dev
```

The application will start running at `http://localhost:3000/`.

### 4. Build for Production

To build the application for deployment:

```bash
pnpm build
```

This generates a static bundle inside the `dist/` directory.

### 5. Preview Production Build Locally

```bash
pnpm preview
```

---

## ☁️ Deployment

### Deploying to Vercel

This repository includes a `vercel.json` file preset for routing rewrite rules.

1. Install Vercel CLI globally or connect your GitHub repository directly to Vercel dashboard.
2. In the root directory, run:
   ```bash
   vercel
   ```
3. Follow the CLI prompt instructions. Vercel will automatically build the React code and set up routing rewrites according to the rules defined in `vercel.json`.
