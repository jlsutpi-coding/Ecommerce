import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  categories: [],
  selectedCategoryProducts: [],
  productsTotal: 0,
  selectedProduct: null,
  selectedCategory: null,
  limit: 20,
  productsStatus: "idle", // idle | pending | succeeded | failed
  categoriesStatus: "idle", // idle | pending | succeeded | failed
  detailStatus: "idle", // idle | pending | succeeded | failed
  selectedCategoryStatus: "idle", // idle | pending | succeeded | failed

  productsError: null,
  detailError: null,
  categoriesError: null,
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
  async (categorySlug, { signal }) => {
    const res = await fetch(`/api/products/category/${categorySlug}`, {
      signal,
    });
    const data = await res.json();
    return data?.products || [];
  },
  {
    // condition runs BEFORE the payload creator executes
    condition: (categorySlug, { getState }) => {
      const { selectedCategory, selectedCategoryProducts } =
        getState().products;

      // If the user clicks the already active category, cancel the execution
      if (
        selectedCategory === categorySlug &&
        selectedCategoryProducts.length > 0
      ) {
        return false;
      }
    },
  },
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedCategory: (state, { payload }) => {
      state.selectedCategory = payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedCategory = null;
      state.selectedCategoryProducts = [];
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
        state.categoriesStatus = "succeeded";
        state.categories = payload.length ? payload : [];
      })
      .addCase(fetchcategories.rejected, (state, action) => {
        state.categoriesStatus = "failed";
        state.categoriesError = action.error.message;
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.selectedCategoryStatus = "pending";
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, { payload }) => {
        state.selectedCategoryStatus = "succeeded";
        state.selectedCategoryProducts = payload;
      });
  },
});

const selectAllProducts = (state) => state.products.products;

export default productsSlice.reducer;

export const { clearSelectedProduct, setSelectedCategory } =
  productsSlice.actions;
