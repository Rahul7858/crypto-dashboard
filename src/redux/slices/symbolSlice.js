
import { createSlice } from "@reduxjs/toolkit";

//This symbol slice
const symbolSlice = createSlice({
    name: 'symbolSlice',
    initialState:{
        setSymbol:'₹'
    },

    reducers:{
        selectSymbol:(state, action)=>{
            state.setSymbol = action.payload
        }
    }
})


export default symbolSlice.reducer;
export const {selectSymbol} = symbolSlice.actions;