import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
  isLoading: false,
  error: null,
};
export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
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

export default cartsSlice.reducer;
export const { addToCart } = cartsSlice.actions;
