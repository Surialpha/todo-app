import React from "react";
import "./App.scss";
import { ToDo } from "./pages/ToDoPage/ToDo";
import { TodoProvider } from "./shared/context/TodoContext";

function App() {
  return (
    <>
      <TodoProvider>
        <ToDo />
      </TodoProvider>
    </>
  );
}

export default App;
