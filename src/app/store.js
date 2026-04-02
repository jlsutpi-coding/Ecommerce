import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productSlice";
import cartsReducer from "../features/cartSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    carts: cartsReducer,
  },
});
