import { Dispatch, SetStateAction } from "react";
import { ToDoModel } from "./ToDoModel"

export type AppInterface = {
    todos: ToDoModel[];
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
    completedToDos: ToDoModel[];
    totalToDos: string;
    searchedToDos: ToDoModel[];
    completeToDo: (id: string) => void
    deleteToDo: (id: string) => void

}