import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, description: "Donec semper sapien a libero.", isDone: false },
  {
    id: 2,
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    isDone: true,
  },
  {
    id: 3,
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    isDone: false,
  },
  { id: 4, description: "Etiam vel augue.", isDone: false },
  {
    id: 5,
    description: "Proin at turpis a pede posuere nonummy.",
    isDone: true,
  },
];

const ListTaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setIsDone: (state, action) => {},
    addNewTask: (state, action) => {
      state.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, description, isDone } = action.payload;
      const existingTask = state.find((task) => task.id === id);
      if (existingTask) {
        existingTask.description = description;
        existingTask.isDone = isDone;
      }
    },
  },
});

export const { setIsDone, updateTask, addNewTask } = ListTaskSlice.actions;

export default ListTaskSlice.reducer;
