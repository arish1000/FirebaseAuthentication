import { createAsyncThunk } from "@reduxjs/toolkit";
import { firebaserServices } from "../../services/firebaseServices/firebaseServices";



export const fetchAllProductsAsync = createAsyncThunk<any, any, any>("products/fetchAllProductsAsync", async(params: any, {rejectWithValue}) => {
    try {
        const response = await firebaserServices.getAllProducts(params);
        const products =  response?.docs?.map((doc : any )=> {
            return {id: doc?.id, ...doc.data() }
        });
        return products;
    }catch(error: any){
        return rejectWithValue(error);
    }
})