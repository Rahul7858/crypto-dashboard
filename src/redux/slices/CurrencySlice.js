import { createSlice } from "@reduxjs/toolkit";

//This is currency drop down slice
const CurrencySlice = createSlice({
    name:'CurrencySlice',
    initialState:{
        setCurrency:'inr'
    },

    reducers:{
        selectedCurrency:(state, action)=>{
            state.setCurrency = action.payload
        }
    }
})

export default CurrencySlice.reducer;
export const {selectedCurrency} = CurrencySlice.actions;