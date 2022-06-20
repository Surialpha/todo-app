import { Dispatch, SetStateAction } from "react";
import { ToDoModel } from "./ToDoModel";

export type AppInterface = {
  todos: ToDoModel[];
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  completedToDos: ToDoModel[];
  totalToDos: string;
  searchedToDos: ToDoModel[];
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  completeToDo: (id: string) => void;
  deleteToDo: (id: string) => void;
  createTodo: (newTodo: string) => void;
};
