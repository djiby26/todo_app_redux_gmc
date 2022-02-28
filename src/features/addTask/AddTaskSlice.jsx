import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const AddTaskSlice = createSlice({
  name: "addTask",
  initialState,
  reducers: {
    toggleForm: (state, action) => {
      state.toggle = action.payload;
    },
  },
});

export const { toggleForm } = AddTaskSlice.actions;

export default AddTaskSlice.reducer;
