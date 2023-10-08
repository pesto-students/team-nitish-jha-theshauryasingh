// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import userReducer from './userSlice';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    product: productReducer
  },
});

export default store;