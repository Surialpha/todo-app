import "./ToDo.scss";
import { CreateTodoButton } from "../../shared/components/CreateTodoButton/CreateTodoButton";
import { ToDoCard } from "../../shared/components/ToDoCard/ToDoCard";
import { ToDoCounter } from "../../shared/components/ToDoCounter/ToDoCounter";
import { ToDoList } from "../../shared/components/ToDoList/ToDoList";
import { ToDoSearch } from "../../shared/components/ToDoSearch/ToDoSearch";
import { ToDoModel } from "../../shared/models/ToDoModel";
import { useTodoContext } from "../../shared/hooks/UseTodoContext";
import { TodoModal } from "../../shared/components/TodoModal/TodoModal";
import { CreateTodoForm } from "../../shared/components/CreateTodoForm/CreateTodoForm";

function ToDo() {
  const appState = useTodoContext();

  return (
    <div className="container">
      <ToDoCounter />
      <ToDoSearch />

      {(appState.searchedToDos.length > 0 && (
        <ToDoList>
          {appState.searchedToDos.map((toDo: ToDoModel) => {
            return (
              <ToDoCard
                key={toDo.key}
                cardInfo={toDo}
                onComplete={() => appState.completeToDo(toDo.key)}
                onDelete={() => appState.deleteToDo(toDo.key)}
              />
            );
          })}
        </ToDoList>
      )) || (
        <p>
          There aren't any TODO here
          {appState.todos.length <= 0 && ", create a new one!"}
        </p>
      )}

      <TodoModal>
        <CreateTodoForm />
      </TodoModal>

      <CreateTodoButton />
    </div>
  );
}

export { ToDo };
