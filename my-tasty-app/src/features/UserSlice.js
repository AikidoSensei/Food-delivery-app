import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 users:[],
 isLoggedIn:true
}
const userSlice = createSlice({
 name:'user',
 initialState,
 reducers: {
  login: (state, {payload})=>{
   console.log(payload);
   state.users.map((item)=>{
    if(item === payload){
     state.isLoggedIn = true
    }
   })

  },
  googleLogin: (state)=>{
   state.isLoggedIn = true
  }
  ,
  signup:(state, {payload})=>{
    const newUser = payload
    state.users = state.users.concat(newUser)
    console.log(state.users);
    
  },
  logout:(state)=>{
   state.isLoggedIn = false
  }
 }
})
export const {googleLogin, login, signup, logout} = userSlice.actions;
export default userSlice.reducer;