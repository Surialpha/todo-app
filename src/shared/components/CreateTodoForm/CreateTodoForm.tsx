import { useState } from "react";
import { useTodoContext } from "../../hooks/UseTodoContext";
import "./CreateTodoForm.scss";
function CreateTodoForm() {
  const appState = useTodoContext();
  const [newTodo, setNewTodo] = useState("");
  const [isValid, setIsValid] = useState(false);

  const saveTodo = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (isValid) {
      try {
        appState.createTodo(newTodo);
        appState.setShowModal(!appState.showModal);
      } catch (e) {}
    }
  };

  const validateValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setNewTodo(e.target.value);
    if (value.length >= 3 && value.length < 250) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <section className="form-todo">
      <h1 className="form-todo--title">Create a new TODO!</h1>
      <form action="submit" className="form-todo--form" onSubmit={saveTodo}>
        <textarea
          name="newTodo"
          id="newTodo"
          value={newTodo}
          onChange={validateValue}
          placeholder="Add a new item like: Walk with the dog"
        ></textarea>
        {!isValid && (
          <label htmlFor="error-todo" className="error">
            The ToDo item must not to be empty, contain a minimum of 3
            characters length and less than 250.
          </label>
        )}
        <div className="actions">
          <button
            className="close"
            onClick={() => {
              appState.setShowModal(!appState.showModal);
            }}
          >
            Close
          </button>
          <button className="create" type="submit" disabled={!isValid}>
            Create
          </button>
        </div>
      </form>
      <span className="character-count">
        {newTodo.length} <i>Characters</i>
      </span>
    </section>
  );
}

export { CreateTodoForm };
