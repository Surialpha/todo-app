import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/UseLocalStorage";
import { v4 as uuidv4 } from "uuid";
import { ToDoModel } from "../models/ToDoModel";
import { AppInterface } from "../models/AppModel";
import { PropModel } from "../models/PropChildrenModel";

const todoContext = createContext<AppInterface | undefined>(undefined);

function TodoProvider(props: PropModel) {
  const defaultToDoList: ToDoModel[] = [
    { key: uuidv4(), text: "Do pending task", completed: false },
    { key: uuidv4(), text: "Do your homework", completed: true },
    { key: uuidv4(), text: "Do your work", completed: false },
    { key: uuidv4(), text: "Do anything", completed: true },
  ];

  const TODOS_LOCAL_NAME = "TODOS_V1";

  const [todos, saveTodos] = useLocalStorage(TODOS_LOCAL_NAME, defaultToDoList);

  const [searchValue, setSearchValue] = useState("");

  const completedToDos = todos
    .filter((toDos: ToDoModel) => toDos.completed)
    .length.toString();
  const totalToDos = todos.length.toString();

  let searchedToDos = [];

  if (searchValue.length < 1) {
    searchedToDos = todos;
  } else {
    searchedToDos = todos.filter((toDo: ToDoModel) =>
      toDo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

  const completeToDo = (id: string) => {
    const toDoIndexFound = todos.findIndex(
      (toDo: ToDoModel) => toDo.key === id
    );
    const newToDos = [...todos];
    newToDos[toDoIndexFound].completed = !todos[toDoIndexFound].completed;
    saveTodos(newToDos);
  };

  const deleteToDo = (id: string) => {
    const toDoIndexFound = todos.findIndex(
      (toDo: ToDoModel) => toDo.key === id
    );
    const newToDos = [...todos];
    newToDos.splice(toDoIndexFound, 1);
    saveTodos(newToDos);
  };

  useEffect(() => {
    console.log("Use Effect :>> ");
  }, [todos]);

  return (
    <todoContext.Provider
      value={{
        todos,
        searchValue,
        setSearchValue,
        completedToDos,
        totalToDos,
        searchedToDos,
        completeToDo,
        deleteToDo,
      }}
    >
      {props.children}
    </todoContext.Provider>
  );
}

export { todoContext, TodoProvider };
