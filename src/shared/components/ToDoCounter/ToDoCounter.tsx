import { useTodoContext } from "../../hooks/UseTodoContext";
import "./TodoCounter.scss";

function ToDoCounter() {
  const { totalToDos, completedToDos } = useTodoContext();

  return (
    <section className="todo-counter">
      <h1>
        TODO LIST <i className="material-icons">format_list_bulleted</i>
      </h1>
      <h4>
        You've done {completedToDos} of {totalToDos} ToDo's
      </h4>
    </section>
  );
}

export { ToDoCounter };
