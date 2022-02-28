import React from "react";
import "./App.css";
import AddTask from "./features/addTask/AddTask";
import ListTask from "./features/listTask/ListTask";
import Navigation from "./features/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
