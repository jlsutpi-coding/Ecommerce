import React, { useEffect, useState } from "react";

import { Outlet } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../redux/features/productSlice";

import ThemeProvider from "./ThemeProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css";
import { PaginationContext } from "../context/PaginationContext";

const Layout = () => {
  const { productsStatus, products, limit } = useSelector(
    (state) => state.products,
  );
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    const newSkip = (currentPage - 1) * limit;
    dispatch(fetchProducts({ limit, skip: newSkip }));
  }, [dispatch, currentPage, limit]);

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
      <PaginationContext.Provider value={{ currentPage, setCurrentPage }}>
        <div className=" dark-transition flex flex-col min-h-screen bg-white dark:bg-[#0B1326] ">
          <Header />
          <main className=" grow">
            <Outlet />
          </main>
          <Footer />
        </div>
      </PaginationContext.Provider>
    </ThemeProvider>
  );
};

export default Layout;
