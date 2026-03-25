import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import HomePage from "./pages/Home/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
