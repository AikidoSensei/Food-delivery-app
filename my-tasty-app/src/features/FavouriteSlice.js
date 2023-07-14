import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 favouriteItems: [],
 favourite: false
}

const favouriteSlice = createSlice({
 name:'favourite',
 initialState,
 reducers:{
  addToFavourite:(state, action)=>{
   const favItem = action.payload
   state.favouriteItems = state.favouriteItems.concat(favItem)
   console.log(favItem);
  },
  removeFromFavourite: (state, action)=>{
   const id = action.payload
   state.favouriteItems = state.favouriteItems.filter((item)=>item.id !== id)
   console.log(state.favouriteItems.length)
  }
  
 }
})
export const {addToFavourite, removeFromFavourite} = favouriteSlice.actions

export default favouriteSlice.reducer