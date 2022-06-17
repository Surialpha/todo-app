import React from "react";
import "./App.scss";
import { ToDo } from "./pages/ToDoPage/ToDo";
import { BottomSvg, TopSvg } from "./shared/assets/svg";
import { TodoProvider } from "./shared/context/TodoContext";

function App() {
  return (
    <>
      <TopSvg />
      <TodoProvider>
        <ToDo />
      </TodoProvider>
      <BottomSvg />
    </>
  );
}

export default App;
