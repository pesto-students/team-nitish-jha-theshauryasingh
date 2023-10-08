// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: 101, // Initial value of cart ID
  },
  reducers: {
    setUserId: (state, action) => { // Actions(functions that modify the state)
      state.userId = action.payload;
    },
  },
});

export const { setUserId } = userSlice.actions; // Action Creators for the Reducers to export Actions to Modify the State

export const selectUserId = (state) => state.user.userId; // export Selectors to access 

export default userSlice.reducer; // export reducer for store 
