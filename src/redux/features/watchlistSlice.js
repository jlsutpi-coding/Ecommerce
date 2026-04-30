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
    deleteAllFromWatchlist: (state) => {
      state.watchlistItems = [];
      addToLocalStorage(state);
    },
  },
});

export default watchlistSlice.reducer;
export const { addToWatchlist, deleteAllFromWatchlist, moveAllToWatchlist } =
  watchlistSlice.actions;
