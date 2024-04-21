import { createAsyncThunk } from "@reduxjs/toolkit";
import { firebaserServices } from "../../services/firebaseServices/firebaseServices";

export const loginUserAsync = createAsyncThunk<any, any, any>(
  "user/loginUserAsync",
  async (params: any, { rejectWithValue }) => {
    try {
      const response = await firebaserServices.login(params);
      return response;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
