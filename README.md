# 🛒 React E-Commerce App (DummyJSON)

A modern, fully responsive e-commerce web application built with **React**.  
It consumes the [DummyJSON](https://dummyjson.com) API using native `fetch` and includes features like product listing with pagination, search, detailed product view, cart management, watchlist (favorites), light/dark mode toggle, and global state management using **Redux** and **Context API**.

> 🔗 **Live Demo (optional)** – _Add your demo link here if deployed_

---

## ✨ Features

- **Product Listing** – Browse products with clean cards and pagination.
- **Product Detail Page** – View full product details (image, description, price, rating, etc.).
- **Search Functionality** – Search products by title.
- **Cart Management** – Add/remove products, update quantities (Redux state).
- **Watchlist (Favorites)** – Save products to a personal watchlist (Redux state).
- **Light / Dark Mode** – Theme toggle powered by React Context.
- **Pagination** – Navigate through product pages efficiently.
- **Error Page** – Custom 404 and fallback error boundary.
- **Responsive Layout** – Tailwind CSS ensures smooth experience on all devices.
- **Single Page Layout** – Modern, clean UI with consistent header/footer.

---

## 🧰 Tech Stack

| Technology       | Purpose                            |
| ---------------- | ---------------------------------- |
| React (v18)      | UI library                         |
| Redux Toolkit    | Global state (cart, watchlist)     |
| React Context    | Theme management (light/dark mode) |
| Tailwind CSS     | Styling & responsive design        |
| React Router DOM | Client-side routing                |
| Fetch API        | Native HTTP requests to DummyJSON  |
| React Icons      | Icons for cart, delete, etc.       |

---

## 📁 Folder Structure (simplified)

src/
├── components/ # Reusable UI components (Navbar, ProductCard, Pagination...)
├── pages/ # Page components (Home, Cart, Watchlist, ProductDetail, Search, Error)
├── context/ # ThemeContext (light/dark mode)
├── redux/ # Redux store & slices (cartSlice, watchlistSlice)
├── App.jsx
├── index.js
└── index.css # Tailwind directives

# 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/ecommerce.git
   cd ecommerce

   ```

2. **install node_modules and pakages**
   pnpm install

# or npm install / yarn install

3. **start the app**
   pnpm dev

# or npm run dev / yarn dev
