import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productSlice";
import cartsReducer from "../features/cartSlice";
import watchlistReducer from "../features/watchlistSlice";
import searchReducer from "../features/searchSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    carts: cartsReducer,
    watchlists: watchlistReducer,
    search: searchReducer,
  },
});
