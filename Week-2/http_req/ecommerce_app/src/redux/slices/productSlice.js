 // productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    loading: "idle",
    error: null,
    productItems: {},
    productPrices: {},
  },
  reducers: {
    addToProduct: (state, action) => {
      const products = action.payload;
      products.forEach((product) => {
        const { id, title, price, description, image } = product;

        if (state.productItems[id] !== undefined) {
          //pass
        } else {
          state.productItems[id] = {title, price, description, image};
          state.productPrices[id] = price;
        }
      });
    },
  },
});

export const { addToProduct } = productSlice.actions; // Action Creators for the Reducers to export Actions to Modify the State

export const selectProduct = (state) => state.product.productItems;
export const selectProductPrice = (state) => state.product.productPrices;
export const selectSpecificProduct = (state, productId) => {
  const productItems = state.product.productItems;
  if (productItems[productId]) {
    return productItems[productId];
  }
  return null; // Return null if the product doesn't exist
};

export default productSlice.reducer; // export reducer for store 
