import { useContext } from "react";
import { todoContext } from "../context/TodoContext";

function useTodoContext() {
  const context = useContext(todoContext)!;
 
  return context;
}

export { useTodoContext };
