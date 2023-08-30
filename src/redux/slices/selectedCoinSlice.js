import { createSlice } from "@reduxjs/toolkit";

//This is coin drop down slice
const selectedCoinSlice = createSlice({
    name: 'selectedCoinSlice',
    initialState:{
        setCoin:'bitcoin'
    },

    reducers:{
        selectCoin:(state, action)=>{
            state.setCoin = action.payload
        }
    }
})


export default selectedCoinSlice.reducer;
export const {selectCoin} = selectedCoinSlice.actions;