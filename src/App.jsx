import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Layout />}></Route>
    </Routes>
  );
};

export default App;
