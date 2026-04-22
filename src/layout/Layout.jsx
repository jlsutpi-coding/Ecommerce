import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";
import ThemeProvider from "./ThemeProvider";

const Layout = () => {
  const { productsStatus, products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, productsStatus]);
  if (productsStatus === "pending") return <>Products are pending</>;
  if (productsStatus === "failed") return <>Products fetch is error</>;
  if (productsStatus === "successed" && products.length === 0)
    return <>No prodcuts available </>;
  return (
    <ThemeProvider>
      <div className=" flex flex-col min-h-screen bg-white dark:bg-[#0B1326] ">
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
