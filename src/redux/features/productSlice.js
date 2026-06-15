import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  products: [],
  categories: [],
  productsTotal: 0,
  selectedProduct: null,
  selectedCategory: null,
  limit: 20,
  productsStatus: "idle", // idel | pending | succeeded | failed
  categoriesStatus: "idle", // idel | pending | succeeded | failed
  detailStatus: "idle", // idel | pending | succeeded | failed

  productsError: null,
  detailError: null,
};

const delay = (delayTime) =>
  new Promise((resolve) => setTimeout(resolve, delayTime));
// fetch  products from fakestoreapi.com/products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ limit = 20, skip = 0 } = {}) => {
    await delay(500);
    let res = await fetch(`/api/products?limit=${limit}&skip=${skip}`);
    if (res.status === 429) {
      await delay(5000);
      res = await fetch(`/api/products?limit=${limit}&skip=${skip}`);
      if (!res.ok) {
        throw new Error(`Falied after retry : ${res.status}`);
      }
    }
    if (!res.ok) {
      throw new Error(`Falied after retry : ${res.status}`);
    }
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

// fetch categories
export const fetchcategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const res = await fetch("/api/products/categories");
    const data = await res.json();
    return data;
  },
);

// fetch products with category name
export const fetchProductsByCategory = createAsyncThunk(
  "categories/fetchProductsByCategory",
  async (categorySlug) => {
    const res = await fetch(`/api/products/${categorySlug}`);
    const data = await res.json();
    return data?.products || [];
  },
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedCategory = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.productsStatus = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.productsStatus = "succeeded";
        state.products = payload.products;
        state.productsTotal = payload.total;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productsStatus = "failed";
        state.productsError = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.detailStatus = "pending";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.detailStatus = "succeeded";
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.detailStatus = "failed";
        state.detailError = action.error.message;
      })
      .addCase(fetchcategories.pending, (state) => {
        state.categoriesStatus = "pending";
      })
      .addCase(fetchcategories.fulfilled, (state, { payload }) => {
        state.categoriesStatus = "succecced";
        state.categories = payload ? payload : [];
      })
      .addCase(fetchcategories.rejected, (state) => {
        state.categoriesStatus = "rejected";
      });
  },
});

const selectAllProducts = (state) => state.products.products;

export default productsSlice.reducer;

export const { clearSelectedProduct, filterByCategory, resetFilterByCategory } =
  productsSlice.actions;
