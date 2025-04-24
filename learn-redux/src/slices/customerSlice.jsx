import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

const customerSlice=createSlice({
    name:'customer',
    initialState,
    reducers:{
        addCustomer(state, acction){
            state.push(acction.payload)
        },
        deleteCustomer(state, acction){
            const deleteIndex=acction.payload;
           return state.filter((value,index)=>index !== deleteIndex)
        }
    },

})

export const{addCustomer,deleteCustomer}=customerSlice.actions

export default customerSlice.reducer