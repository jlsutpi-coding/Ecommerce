import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("watchlists")) || {
  watchlistItems: [],
  isError: null,
  isLoading: false,
};

const addToLocalStorage = (state) => {
  localStorage.setItem("watchlists", JSON.stringify(state));
};

const watchlistSlice = createSlice({
  name: "watchlists",
  initialState,
  reducers: {
    addToWatchlist: (state, { payload }) => {
      if (!state.watchlistItems.some((item) => item.id === payload.id)) {
        state.watchlistItems.push(payload);
        addToLocalStorage(state);
      }
    },
    removeFromWatchlist: (state, { payload }) => {
      const existingWatchlist = state.watchlistItems.find(
        (item) => item.id === payload,
      );
      if (!existingWatchlist) return;
      state.watchlistItems = state.watchlistItems.filter(
        (item) => item.id !== existingWatchlist.id,
      );
    },
    deleteAllFromWatchlist: (state) => {
      state.watchlistItems = [];
      addToLocalStorage(state);
    },
  },
});

export default watchlistSlice.reducer;
export const {
  addToWatchlist,
  deleteAllFromWatchlist,
  moveAllToWatchlist,
  removeFromWatchlist,
} = watchlistSlice.actions;
