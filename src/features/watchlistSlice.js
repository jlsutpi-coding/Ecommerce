import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchlistItems: [],
  isError: null,
  isLoading: false,
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: (state, { payload }) => {
      if (!state.watchlistItems.some((item) => item.id === payload.id)) {
        state.watchlistItems.push(payload);
      }
    },
  },
});

export default watchlistSlice.reducer;
export const { addToWatchlist } = watchlistSlice.actions;
