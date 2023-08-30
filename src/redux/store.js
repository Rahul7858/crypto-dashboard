import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./slices/CurrencySlice";
import daysReducer from "./slices/daysSlice";
import coinsApiReducer from "./apiSlices/coinsApiSlice";
import chartsApiReducer from "./apiSlices/chartsApiSlice";
import symbolReducer from "./slices/symbolSlice";
import selectedCoinReducer from "./slices/selectedCoinSlice";
import chartReducer from "./slices/chartSlice";


//This the store where all the slices are store
export default configureStore({
    reducer:{
        currencyReducer,
        coinsApiReducer,
        chartsApiReducer,
        daysReducer,
        symbolReducer,
        selectedCoinReducer,
        chartReducer
    }
})