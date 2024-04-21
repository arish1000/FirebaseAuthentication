import { createSlice } from "@reduxjs/toolkit";
import { loginUserAsync } from "../actions/user.action";
import { error } from "console";

const initialState = {
  isLoading: false,
  error: "",
  user: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: () => initialState,
    setUser: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state, action) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginUserAsync.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
