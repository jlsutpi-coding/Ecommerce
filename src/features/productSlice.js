import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedProduct: null,
  productsStatus: "idle", // idel | pending | successed | failed
  detailStatus: "idle", // idel | pending | successed | failed

  productsError: null,
  detailError: null,
};

// fetch all products from fakestoreapi.com/products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("/api/products?limit=0");
    const data = await res.json();
    return data;
  },
);

//fetch a product from fakestoreapi using id
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const res = await fetch(`/api/products/${id}`);
    const data = await res.json();
    return data;
  },
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.productsStatus = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsStatus = "successed";
        state.products = action.payload.products;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productsStatus = "failed";
        state.productsError = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.detailStatus = "pending";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.detailStatus = "successed";
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.detailStatus = "failed";
        state.detailError = action.error.message;
      });
  },
});

const selectAllProducts = (state) => state.products.products;

export const selectCategoriesWithCounts = createSelector(
  [selectAllProducts],
  (products) => {
    const counts = {};

    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return Object.keys(counts).map((slug) => ({
      slug,
      name: slug?.charAt(0).toUpperCase() + slug.slice(1),
      counts: counts[slug],
    }));
  },
);
export default productsSlice.reducer;

export const { clearSelectedProduct } = productsSlice.actions;
