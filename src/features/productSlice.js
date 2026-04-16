import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredItems: [],
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
    searchFromCart: (state, { payload }) => {
      if (!payload) {
        state.filteredItems = state.products;
      } else {
        state.filteredItems = state.products.filter((item) =>
          item.title.toLowerCase().includes(payload.toLowerCase()),
        );
      }
    },
    filterByCategory: (state, { payload }) => {
      if (!payload) return;
      state.filteredItems = state.products.filter(
        (item) => item.category.toLowerCase() === payload.toLowerCase(),
      );
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
        state.filteredItems = action.payload.products;
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
  if (!filteredItems.length) {
    return null;
  }
  const allProductCounts = products.length || 0;
  if (filteredItems.length === allProductCounts) {
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

export default productsSlice.reducer;

export const { clearSelectedProduct, searchFromCart, filterByCategory } =
  productsSlice.actions;
