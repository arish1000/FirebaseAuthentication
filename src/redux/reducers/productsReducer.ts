import { createSlice } from "@reduxjs/toolkit"
import { fetchAllProductsAsync } from "../actions/products.action"


const initialState = {
    isLoading: false,
    error: '',
    products:[]
}


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        resetProducts: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProductsAsync.pending, (state, action) => {
            state.isLoading = true;
            state.error = "";
        }).addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        }).addCase(fetchAllProductsAsync.rejected, (state, action: any) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})


export const {resetProducts} = productsSlice.actions;

export default productsSlice.reducer;