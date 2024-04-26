import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    title: ''
  };


export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setHeader: (state, action) => {
            state.title = action.payload;

        },
        resetHeader: () => initialState
    }
})


export const {setHeader, resetHeader} = headerSlice.actions;

export default headerSlice.reducer;