import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
