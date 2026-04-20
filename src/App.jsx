import { Route, Routes } from "react-router";

import Layout from "./layout/Layout";
import HomePage from "./pages/Home/HomePage";
import ProductPage from "./pages/Product/ProductPage";
import CartPage from "./pages/cart/CartPage";
import WatchlistPage from "./pages/watchlist/WatchlistPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
