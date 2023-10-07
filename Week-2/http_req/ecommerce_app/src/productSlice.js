// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartId: null, // Initial value of cart ID
  },
  reducers: {
    setCartId: (state, action) => { // Actions(functions that modify the state)
      state.cartId = action.payload;
    },
  },
});

export const { setCartId } = cartSlice.actions; // Action Creators for the Reducers to export Actions to Modify the State

export const selectCartId = (state) => state.cart.cartId; // export Selectors to access 

export default cartSlice.reducer; // export reducer for store 



// use setCartId useDispatch
// const dispatch = useDispatch();
// dispatch(setCartId(data.cartId));

// use cartId useSelector
// const cartId = useSelector(selectCartId);