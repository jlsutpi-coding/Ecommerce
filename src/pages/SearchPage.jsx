import { useEffect } from "react";

import { useSearchParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import {
  clearSearch,
  setIsSearching,
  setSearchResults,
} from "../features/searchSlice";
import { fetchProducts } from "../features/productSlice";
import ProductCard from "../components/ProductCard";
import CardsSection from "../components/CardsSection";

const SearchPage = () => {
  const { products, productsStatus, filteredItems } = useSelector(
    (state) => state.products,
  );
  const { searchResults } = useSelector((state) => state.search);

  const [searchParam] = useSearchParams();

  const query = searchParam.get("q") || "";
  const dispatch = useDispatch();

  useEffect(() => {
    if (query) {
      // Filtering products based on search query
      const searchFilteredProducts = products.filter(
        (product) =>
          product.title.toLowerCase().includes(query.toLocaleLowerCase()) ||
          product.description.toLowerCase().includes(query.toLocaleLowerCase()),
      );
      dispatch(setSearchResults(searchFilteredProducts));
      dispatch(setIsSearching(false));
    }
    return () => {
      dispatch(clearSearch());
    };
  }, [query, dispatch, products]);
  if (!searchResults.length) return <></>;

  return (
    <div className=" mt-40 mx-auto max-w-360 px-8">
      <CardsSection productsToshow={searchResults}></CardsSection>{" "}
    </div>
  );
};

export default SearchPage;
