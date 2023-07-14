import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getAll, getCategory, getRating, getPrice, getOne, getHotDeals } from "../api-handler/axios";

 export const getProducts = createAsyncThunk('products/getProducts', getAll)

 export const sortCategory = createAsyncThunk('products/getCategory', getCategory)
 
 export const sortPrice = createAsyncThunk('products/getPrice', getPrice)

 export const sortRating = createAsyncThunk('products/getRating', getRating)

 export const getOneProduct = createAsyncThunk('products/getOne', getOne)

  export const getMyHotDeals = createAsyncThunk('hot/getHotDeals', getHotDeals)

const initialState = {
 productItems:[],
 singleProduct:[],
 hotDeals:[],
 price:0,
 rating:0,
 apiLoading:false,
 isError:false
}

const filterSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    rating: (state, { payload }) => {
      state.rating = payload
    },
    price: (state, { payload }) => {
      state.price = payload
    },
  },
  extraReducers: {
    // GET ALL PRODUCTS
    [getProducts.pending]: (state) => {
      state.apiLoading = true
    },
    [getProducts.fulfilled]: (state, action) => {
      state.apiLoading = false
      state.productItems = action.payload
    },
    [getProducts.rejected]: (state) => {
      state.isError = true
    },
    // SORTING BY CATEGORY
    [sortCategory.pending]: (state) => {
      state.apiLoading = true
    },
    [sortCategory.fulfilled]: (state, action) => {
      const category = action.payload
      state.apiLoading = false
      state.productItems = category
    },
    [sortCategory.rejected]: (state) => {
      state.isError = true
    },
    // SORT BY PRICE
    [sortPrice.pending]: (state) => {
      state.apiLoading = true
    },
    [sortPrice.fulfilled]: (state, action) => {
      const price = action.payload
      state.apiLoading = false
      state.productItems = price
    },
    [sortPrice.rejected]: (state) => {
      state.isError = true
    },
    // SORT BY RATING
    [sortRating.pending]: (state) => {
      state.apiLoading = true
    },
    [sortRating.fulfilled]: (state, action) => {
      const rating = action.payload
      state.apiLoading = false
      state.productItems = rating
    },
    [sortRating.rejected]: (state) => {
      state.isError = true
    },
    //GET HOT DEALS
    [getMyHotDeals.pending]: (state) => {
      state.apiLoading = true
    },
    [getMyHotDeals.fulfilled]: (state, action) => {
      const hotDeals = action.payload
      state.hotDeals = hotDeals
    },
    [getMyHotDeals.rejected]: (state) => {
      state.isError = true
    },
    //GET ONE PRODUCT
    [getOneProduct.pending]: (state) => {
      state.apiLoading = true
    },
    [getOneProduct.fulfilled]: (state, action) => {
      const product = action.payload
      // console.log(price)
      state.apiLoading = false
      state.singleProduct = product
    },
    [getOneProduct.rejected]: (state) => {
      state.isError = true
    },
  },
})
export const {rating, price} = filterSlice.actions
export default filterSlice.reducer