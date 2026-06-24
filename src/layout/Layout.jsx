import { useEffect, useState } from "react";

import { Outlet, useNavigate } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { fetchcategories, fetchProducts } from "../redux/features/productSlice";

import ThemeProvider from "./ThemeProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PaginationContext } from "../context/PaginationContext";

import "../index.css";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  const { productsStatus, products, limit } = useSelector(
    (state) => state.products,
  );
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    const newSkip = (currentPage - 1) * limit;
    if (typeof currentPage === "number" && typeof newSkip === "number") {
      dispatch(fetchProducts({ limit, skip: newSkip }));
    }
  }, [currentPage]);

  useEffect(() => {
    dispatch(fetchcategories());
  }, []);

  useEffect(() => {
    if (productsStatus === "failed") {
      nav("/404");
      return;
    }
    if (productsStatus === "succeeded" && products?.length === 0) {
      nav("/empty");
      return;
    }
  }, [productsStatus, nav, products]);

  return (
    <ThemeProvider>
      <PaginationContext.Provider value={{ currentPage, setCurrentPage }}>
        <div className=" dark-transition flex flex-col min-h-dvh ">
          <Header />
          <main className="grow">
            <Outlet />
          </main>
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              success: {
                duration: 3000,
              },
            }}
          />
        </div>
      </PaginationContext.Provider>
    </ThemeProvider>
  );
};

export default Layout;
