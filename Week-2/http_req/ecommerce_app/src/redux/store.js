// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice';
import productReducer from './slices/productSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    product: productReducer
  },
});

export default store;