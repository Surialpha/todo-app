import { useContext } from "react";
import { todoContext } from "../context/TodoContext";

function useTodoContext() {
  const context = useContext(todoContext);
  if (context === undefined) {
    throw new Error("todoContext must be used within a provider");
  }
  return context;
}

export { useTodoContext };
