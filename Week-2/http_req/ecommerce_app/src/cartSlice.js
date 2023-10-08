// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    // cartId: 102, // Initial value of cart ID
    cartItems: {},
  },
  reducers: {
    // setCartId: (state, action) => { // Actions(functions that modify the state)
    //   state.cartId = action.payload;
    // },
    addToCart: (state, action) => {
      const { productId, quantity  } = action.payload;
      console.log("addToCart ", productId, quantity )

      if (state.cartItems[productId] !== undefined) {
        state.cartItems[productId] += quantity;
      } else {
        state.cartItems[productId] = quantity;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions; // Action Creators for the Reducers to export Actions to Modify the State

// export const selectCartId = (state) => state.cart.cartId; // export Selectors to access
export const selectCart = (state) => state.cart.cartItems; 

export default cartSlice.reducer; // export reducer for store 


// Example
// use setCartId useDispatch
// const dispatch = useDispatch();
// dispatch(setCartId(data.cartId));

// use cartId useSelector
// const cartId = useSelector(selectCartId);