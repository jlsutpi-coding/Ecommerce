import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResults: [],
  searchStatus: "idle",
  searchError: null,
};

// search api call
export const fetchSearchProduct = createAsyncThunk(
  "search/searchWithProductName",
  async (name, { rejectWithValue }) => {
    try {
      const res = await fetch(`/api/products/search?q=${name}`);

      if (!res?.ok) {
        throw new Error(`Http ${res.status}`);
      }

      const data = await res.json();
      return data?.products ?? [];
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  },
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.searchResults = [];
      state.searchStatus = "idle";
      state.searchError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchProduct.pending, (state) => {
        state.searchStatus = "pending";
      })
      .addCase(fetchSearchProduct.fulfilled, (state, { payload }) => {
        state.searchStatus = "succeeded";
        state.searchResults = payload;
      })
      .addCase(fetchSearchProduct.rejected, (state, { payload }) => {
        state.searchStatus = "rejected";
        state.searchError = payload;
      });
  },
});

export default searchSlice.reducer;
export const { clearSearch } = searchSlice.actions;
