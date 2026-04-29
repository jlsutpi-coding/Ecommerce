import React, { useEffect } from "react";

import { Outlet } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../redux/features/productSlice";

import ThemeProvider from "./ThemeProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css";

const Layout = () => {
  const { productsStatus, products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, productsStatus]);
  if (productsStatus === "pending")
    return (
      <div className=" h-screen  dark:bg-[#0b1326] text-white">
        Products are pending
      </div>
    );
  if (productsStatus === "failed") return <>Products fetch is error</>;
  if (productsStatus === "successed" && products.length === 0)
    return <>No prodcuts available </>;
  return (
    <ThemeProvider>
      <div className=" dark-transition flex flex-col min-h-screen bg-white dark:bg-[#0B1326] ">
        <Header />
        <main className=" grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
