import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productSlice";
import cartsReducer from "../features/cartSlice";
import watchlistReducer from "../features/watchlistSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    carts: cartsReducer,
    watchlists: watchlistReducer,
  },
});
