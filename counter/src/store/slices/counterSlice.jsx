import {createSlice} from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:"Counter",
    initialState:0,
    reducers:{
        incCount(state,action){
           return state+1;
          
        },
        decCount(state,actioin){
            if (state > 0) {
            return state-1;
            }
            else{
                return 0
            }
        },
        resetCount(state,action){
            return 0;
          
        },
    },
})

export const {incCount,decCount,resetCount}=counterSlice.actions;
export default counterSlice;