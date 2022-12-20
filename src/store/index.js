import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

const store = configureStore({
  reducer: { count: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
