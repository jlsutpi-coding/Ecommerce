import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  searchResults: [],
  isSearching: false,
};

const searchSlice = createSlice({
  name: "serch",
  initialState,
  reducers: {
    setSearchQery: (state, { payload }) => {
      state.searchQuery = payload;
    },
    setSearchResults: (state, { payload }) => {
      state.searchResults = payload;
    },
    setIsSearching: (state, { payload }) => {
      state.isSearching = payload;
    },
    clearSearch: (state) => {
      state.searchQuery = "";
      state.searchResults = [];
      state.isSearching = false;
    },
  },
});

export default searchSlice.reducer;
export const { setSearchQery, setIsSearching, setSearchResults, clearSearch } =
  searchSlice.actions;
