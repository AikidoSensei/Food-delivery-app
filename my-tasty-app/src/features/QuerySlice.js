import { getQuery } from "../api-handler/axios";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getQueryItems = createAsyncThunk('query/getQuery', getQuery)

const initialState = {
 queryItems: [],
 showQuery:false,
}

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
   showQuery: (state, {payload})=>{
    if (payload.length > 2){
     state.showQuery = true
    }
    else {state.showQuery = false}
   }
  },
  extraReducers: {
    [getQueryItems.pending]: (state) => {
      state.apiLoading = true
    },
    [getQueryItems.fulfilled]: (state, action) => {
      state.apiLoading = false
      state.queryItems = action.payload
    },
    [getQueryItems.rejected]: (state) => {
      state.isError = true
    },
  },
})
export const {showQuery} = querySlice.actions
export default querySlice.reducer