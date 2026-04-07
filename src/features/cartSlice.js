import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
  totalDiscount: 0,
  totalDiscountedPrice: 0,
  isLoading: false,
  error: null,
};
export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      // search if the prodcut is already exist or not
      const existingItem = state.cartItems.find(
        (item) => item.id === payload.id,
      );

      // Calculate totals for 1 unit (for new items) or N units (for existing item)
      const newQuantity = !existingItem ? 1 : existingItem.quantity + 1;
      const totals = calculateProductDetailTotal(payload, newQuantity);

      if (!existingItem) {
        state.cartItems.push({
          id: payload.id,
          title: payload.title,
          price: payload.price,
          quantity: 1,
          thumbnail: payload.thumbnail,
          discountPercentage: payload.discountPercentage,
          total: totals.normalTotalPrice,
          discountedTotal: totals.totalDiscountedPrice,
          category: payload.category,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.total = totals.normalTotalPrice;
        existingItem.discountedTotal = totals.totalDiscountedPrice;
      }
      updateGlobalTotals(state);
    },

    addQuantity: (state, { payload }) => {
      // Find the selected to update quantity
      const selectedProduct = state.cartItems.find(
        (item) => item.id === payload,
      );

      if (selectedProduct) {
        // update the quantity of selected Product
        selectedProduct.quantity += 1;

        // calculate the prdouct deatals total prices
        const totals = calculateProductDetailTotal(
          selectedProduct,
          selectedProduct.quantity,
        );
        // update the total price of product deatail
        selectedProduct.total = totals.normalTotalPrice;
        selectedProduct.discountedTotal = totals.totalDiscountedPrice;
        updateGlobalTotals(state);
      }
    },
    subStractQuantity: (state, { payload }) => {
      const selectedProduct = state.cartItems.find((item) => {
        return item.id === payload;
      });
      if (!selectedProduct || selectedProduct.quantity <= 1) return;
      selectedProduct.quantity -= 1;

      // calculate single item total and update the data

      const totals = calculateProductDetailTotal(
        selectedProduct,
        selectedProduct.quantity,
      );
      selectedProduct.total = totals.normalTotalPrice;
      selectedProduct.discountedTotal = totals.totalDiscountedPrice;

      // update the totals of all items price
      updateGlobalTotals(state);
    },
    deleteFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
      updateGlobalTotals(state);
    },
  },
});

const calculateProductDetailTotal = (product, quantity = 1) => {
  // 1. Convert to cents
  const priceInCents = Math.round(product.price * 100);

  // 2. Calculate discount per items in cents
  const discountPerItemCents = Math.round(
    priceInCents * (product.discountPercentage / 100),
  );

  // 3. Subtract discount from original price
  const discountedPricePerItemCent = priceInCents - discountPerItemCents;

  return {
    normalTotalPrice: (priceInCents * quantity) / 100,
    totalDiscountedPrice: (discountedPricePerItemCent * quantity) / 100,
    totalSaving: (discountPerItemCents * quantity) / 100,
  };
};

const calculateTotalPrices = (cartItems) => {
  // Use a single reduce to calculate all three values at once
  const totals = cartItems.reduce(
    (acc, item) => {
      const priceCents = Math.round(item.total * 100);
      const discountedPriceCents = Math.round(item.discountedTotal * 100);

      acc.totalPriceCents += priceCents;
      acc.totalDiscountedPriceCents += discountedPriceCents;

      // The discount is the original price minus the discounted price
      acc.totalDiscountCents += priceCents - discountedPriceCents;

      return acc;
    },
    {
      totalPriceCents: 0,
      totalDiscountedPriceCents: 0,
      totalDiscountCents: 0,
    },
  );

  return {
    totalPrice: totals.totalPriceCents / 100,
    totalDiscountedPrice: totals.totalDiscountedPriceCents / 100,
    totalDiscount: totals.totalDiscountCents / 100,
  };
};

const updateGlobalTotals = (state) => {
  // calculate all items total price
  const allitemTotal = calculateTotalPrices(state.cartItems);
  // update all items total price
  state.totalAmount = allitemTotal.totalPrice;
  state.totalDiscount = allitemTotal.totalDiscount;
  state.totalDiscountedPrice = allitemTotal.totalDiscountedPrice;
};

export default cartsSlice.reducer;
export const { addToCart, addQuantity, subStractQuantity, deleteFromCart } =
  cartsSlice.actions;
