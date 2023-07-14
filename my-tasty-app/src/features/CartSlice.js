import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 cartItems:[],
 amount:0,
 total:0,
 handleAdded: false,
}

const cartSlice = createSlice({
 name:"cart",
 initialState,
 reducers:{
  addToCart: (state, action)=>{
   const newItem = action.payload
   state.cartItems = state.cartItems.concat(newItem)
   console.log(state.cartItems);

  }
  // ,
  // handleAdded:(state, action)=>{
   
  //  state.handleAdded = !handleAdded
  // }
  ,
  removeItem: (state, action)=>{
   const id = action.payload
   const newItems = state.cartItems.filter((item)=>item.id != id)
   state.cartItems = newItems
  },
  increase: (state, action)=>{
   const id = action.payload;
   const cartItem = state.cartItems.find((item)=>item.id === id)
   cartItem.amount = cartItem.amount + 1
  },
  decrease: (state, {payload})=>{
   const id = payload;
   const cartItem = state.cartItems.find((item)=>item.id === id)
   cartItem.amount = cartItem.amount - 1
  },
  evaluateTotal: (state)=>{
   let amount = 0;
   let total = 0;
   state.cartItems.forEach((item)=>{
    amount += item.amount;
    total += item.amount * [item.price + 0.99];

   })
   state.amount = amount;
   state.total = total
  }
 }

})
console.log(cartSlice);
export const {addToCart, removeItem, increase, decrease, evaluateTotal} = cartSlice.actions
export default cartSlice.reducer