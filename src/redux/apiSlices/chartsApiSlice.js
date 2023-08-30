import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../data";

// Fetching market_chart data
export const fetchAsyncCharts = createAsyncThunk('charts/api', 
    async(args)=>{
        const { coin, currency, time } = args;
        const response = await api.get(`coins/${coin}/market_chart?vs_currency=${currency}&days=${time}&interval=daily`);
        return response.data.prices;
    });


    // created chartApiSlice
const chartsApiSlice = createSlice({
    name: 'chartsApiSlice',
    initialState:{
        chart:[],
        loading: false,
        error: null
    },

    extraReducers: function(builder){
        builder.addCase(fetchAsyncCharts.pending, (state, action)=>{
            state.loading = true;
        })
        .addCase(fetchAsyncCharts.fulfilled, (state, action)=>{
            state.chart = action.payload;
            state.loading = false;
        })
        .addCase(fetchAsyncCharts.rejected, (state, action)=>{
            state.error = action.error.message;
        })
    }

    
})

export const {} = chartsApiSlice.actions;
export default chartsApiSlice.reducer;