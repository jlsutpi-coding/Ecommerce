import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <Outlet />
      <p>hi hello world</p>
    </div>
  );
};

export default Layout;
