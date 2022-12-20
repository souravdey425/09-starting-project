import { createSlice } from "@reduxjs/toolkit";

const authState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: authState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authAction = authSlice.actions;
export default authSlice;
