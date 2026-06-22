import { Route, Routes } from "react-router";

import Layout from "./layout/Layout";
import HomePage from "./pages/Home/HomePage";
import ProductPage from "./pages/Product/ProductPage";
import CartPage from "./pages/cart/CartPage";
import WatchlistPage from "./pages/watchlist/WatchlistPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import SearchPage from "./pages/SearchPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrderSuccessPage from "./pages/order-success/OrderSuccessPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products/:productId" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="watchlist" element={<WatchlistPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="order-success" element={<OrderSuccessPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
