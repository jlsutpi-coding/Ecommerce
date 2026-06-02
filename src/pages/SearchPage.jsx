import { useEffect } from "react";

import { useLocation, useSearchParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { clearSearch, fetchSearchProduct } from "../redux/features/searchSlice";

import ProductCard from "../components/ProductCard";
import CardsSection from "../components/CardsSection";
import Breadcrumb from "../components/Breadcrumb";

const SearchPage = () => {
  const { searchResults, searchStatus, searchError } = useSelector(
    (state) => state.search,
  );
  const location = useLocation();
  const [searchParam] = useSearchParams();

  const query = searchParam.get("q") || "";
  const dispatch = useDispatch();
  useEffect(() => {
    if (query) {
      dispatch(fetchSearchProduct(query));
    }
  }, [query, location.state]);

  useEffect(() => {
    return () => {
      dispatch(clearSearch());
    };
  }, []);

  if (searchStatus === "pending") return <>loading...</>;

  if (searchStatus === "rejected") return <>{searchError}</>;

  if (searchStatus === "idle")
    return <div className="mt-40">Enter a search term</div>;
  return (
    <div className=" mt-40 mx-auto max-w-360 px-8">
      <Breadcrumb />
      {searchResults.length > 0 ? (
        <CardsSection productsToshow={searchResults} />
      ) : (
        <div className="text-center mt-20 text-[#757684]">
          <p className="text-xl font-medium">No results found for "{query}"</p>
          <p className="text-sm mt-2">
            Check your spelling or try searching for a different keyword.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
