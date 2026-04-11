import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isError: null,
  isLoading: false,
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {},
});

export default watchlistSlice.reducer;
