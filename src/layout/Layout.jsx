import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <p>hi hello world</p>
    </>
  );
};

export default Layout;
