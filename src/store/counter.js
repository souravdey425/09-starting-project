import { createSlice } from "@reduxjs/toolkit";

const counterState = { count: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: counterState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    increase(state, action) {
      state.count = state.count + action.payload;
    },
    showCount(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterAction = counterSlice.actions;
export default counterSlice;
