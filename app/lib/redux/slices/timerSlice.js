import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    timerId: null,
  },
  reducers: {
    setTimer: (state, action) => {
      if (state.timerId) {
        clearTimeout(state.timerId);
      }
      state.timerId = setTimeout(
        action.payload.callback,
        action.payload.duration
      );
    },
    resetTimer: (state) => {
      if (state.timerId) {
        clearTimeout(state.timerId);
      }
      state.timerId = null;
    },
  },
});


export const { setTimer, resetTimer } = timerSlice.actions;
export const selectTimer = (state) => state.timer;
export const timerReducer = timerSlice.reducer;
