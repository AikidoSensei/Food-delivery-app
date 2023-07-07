import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 cartItems:[],
 amount:1,
 total:0,
}

const cartSlice = createSlice({
 name:"cart",
 initialState,
 reducers:{
  addToCart: (state, action)=>{
   console.log(typeof(state.cartItems));
   const newItem = action.payload
   console.log(newItem);
   state.cartItems = state.cartItems.concat(newItem)
  }
 }

})
console.log(cartSlice);
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer