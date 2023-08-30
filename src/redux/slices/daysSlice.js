import { createSlice } from "@reduxjs/toolkit";

//This is days slice
const daysSlice = createSlice({
    name: 'daysSlice',
    initialState:{
        setDays:'7'
    },

    reducers:{
        selectDay:(state, action)=>{
            state.setDays = action.payload
        }
    }
})


export default daysSlice.reducer;
export const {selectDay} = daysSlice.actions;