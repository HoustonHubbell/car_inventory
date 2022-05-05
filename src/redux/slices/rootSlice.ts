import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Bitcoin',
        price: "38456.65",
        ticker: "BTC",
        volume: '500 Million',
        market_cap: '18 Billion',
        percent_change: '5.27',
        description: 'Blockchain currency',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseTicker: (state, action) => { state.ticker = action.payload},
        chooseVolume: (state, action) => { state.volume = action.payload},
        chooseMarketCap: (state, action) => { state.market_cap = action.payload},
        chooseChange: (state, action) => { state.percent_change = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, chooseDescription, chooseVolume, chooseChange, chooseTicker, chooseMarketCap } = rootSlice.actions
