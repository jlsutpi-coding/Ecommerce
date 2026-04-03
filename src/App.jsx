import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import HomePage from "./pages/Home/HomePage";
import ProductPage from "./pages/Product/ProductPage";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
};

export default App;
