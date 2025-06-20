import {createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload; //payload is the user object
        },
        removeUser:(state,action)=>{
            return null; //clear the user state
        },
    },
})
export const{addUser,removeUser}=userSlice.actions; //export the actions to be used in components
export default userSlice.reducer; //export the reducer to be used in store