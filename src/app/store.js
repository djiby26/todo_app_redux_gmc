import { configureStore } from "@reduxjs/toolkit";
import AddTaskSlice from "../features/addTask/AddTaskSlice";
import ListTaskSlice from "../features/listTask/ListTaskSlice";

export default configureStore({
  reducer: {
    tasks: ListTaskSlice,
    addTask: AddTaskSlice,
  },
});
