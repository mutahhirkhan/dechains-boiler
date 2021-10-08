import { createSlice, isPending, isRejected } from "@reduxjs/toolkit";

import { getTasks } from "./thunk";

const thunks = [getTasks];

const initialState = {
  status: "idle",
  tasks: [],
};

export const slice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setErrorEmpty(state) {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.status = "idle";
      state.tasks = action.payload;
    });
  },
});

export const selectTasks = (state) => state.tasks.tasks;

export default slice.reducer;
