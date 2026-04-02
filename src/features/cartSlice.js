import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
  isLoading: false,
  error: null,
};
export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
});

export default cartsSlice.reducer;
