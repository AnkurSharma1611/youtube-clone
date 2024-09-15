import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: 'search',
    initialState : {},
    reducers: {
        cacheResults: (state, action) => {
            // state = { ...action.payload, ...state }; Not working like that 
            state = Object.assign(state, action.payload);
        },
    },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;