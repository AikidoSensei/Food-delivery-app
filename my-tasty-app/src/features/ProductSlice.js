import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const url = 'https://tasty-backend-yula.onrender.com/getdata'



export const getProducts = createAsyncThunk('products/getProducts  ',async () => {
 try {
  const resp = await axios(url);
  return resp.data
 } catch (error) {
  console.log(error);
 }
})

const initialState = {
  productItems: [],
  apiLoading: true,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.apiLoading = true
    },
    [getProducts.fulfilled]: (state, action) => {
      console.log(action)
      state.apiLoading = false
      state.productItems = action.payload
    },
    [getProducts.rejected]: (state) => {
      state.apiLoading = false
    },
  },
})
export const {burger, pizza} = productSlice.actions
export default productSlice.reducer
