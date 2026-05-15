import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { retry } from "@reduxjs/toolkit/query";

const initialState = {
  products: [],
  productsTotal: 0,
  filteredItems: [],
  selectedProduct: null,
  limit: 20,
  productsStatus: "idle", // idel | pending | succeeded | failed
  detailStatus: "idle", // idel | pending | succeeded | failed

  productsError: null,
  detailError: null,
};

const delay = (delayTime) =>
  new Promise((reslove) => setTimeout(reslove, delayTime));
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

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },

    filterByCategory: (state, { payload }) => {
      if (!payload) return;
      state.filteredItems = state.products.filter(
        (item) => item.category.toLowerCase() === payload.toLowerCase(),
      );
    },
    resetFilterByCategory: (state) => {
      state.filteredItems = state.products;
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
        state.filteredItems = payload.products;
        state.productsTotal = payload.total;
        state.skip = payload.skip;
        // state.limit = payload.limit;
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
      });
  },
});

const selectAllProducts = (state) => state.products.products;

export const selectCategoriesWithCounts = createSelector(
  [selectAllProducts],
  (products) => {
    const counts = {};

    products?.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return Object.keys(counts).map((slug) => ({
      slug,
      name: slug
        .replace(/-/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      counts: counts[slug],
    }));
  },
);

// get category type
export const getCategoryType = (state) => {
  const { filteredItems, products } = state.products;
  if (!filteredItems?.length) {
    return null;
  }
  const allProductCounts = products?.length || 0;
  if (filteredItems?.length === allProductCounts) {
    return "all-products";
  }

  if (!allProductCounts) {
    return null;
  }

  const firstCategory = filteredItems[0].category;

  const allSameCategory = filteredItems.every(
    (item) => item.category === firstCategory,
  );

  return allSameCategory ? firstCategory : null;
};

export const selectTotalProductCount = createSelector(
  [selectCategoriesWithCounts],
  (categories) => {
    return categories.reduce((acc, cat) => cat.counts + acc, 0);
  },
);

export default productsSlice.reducer;

export const { clearSelectedProduct, filterByCategory, resetFilterByCategory } =
  productsSlice.actions;
