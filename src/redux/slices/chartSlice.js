import { createSlice } from "@reduxjs/toolkit";

//This is chart Slice
const chartSlice = createSlice({
    name: 'chartSlice',
    initialState:{
        setChart:'LineChart'
    },

    reducers:{
        selectChart:(state, action)=>{
            state.setChart = action.payload
        }
    }
})


export default chartSlice.reducer;
export const {selectChart} = chartSlice.actions;