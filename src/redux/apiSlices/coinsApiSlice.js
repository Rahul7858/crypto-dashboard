import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../data";

// Fetching coins data
export const fetchAsyncCoins = createAsyncThunk('currency/api', 
    async(id)=>{
    const response = await api.get(`coins/markets?vs_currency=${id}&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`);
    return response.data;
});

//created coinApiSlice
const coinsApiSlice = createSlice({
    name: 'coinsApiSlice',
    initialState:{
        coins:[],
        loading: false, 
    },

    extraReducers: function(builder){
        builder.addCase(fetchAsyncCoins.pending, (state, action)=>{
            state.loading = true;
        })
        .addCase(fetchAsyncCoins.fulfilled, (state, action)=>{
            state.coins = action.payload;
            state.loading = false;
        })
        .addCase(fetchAsyncCoins.rejected, (state, action)=>{
            console.log('Error')
        })
    }

    
})

export const {} = coinsApiSlice.actions;
export default coinsApiSlice.reducer;