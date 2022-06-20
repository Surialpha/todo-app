import React from "react";
import { useTodoContext } from "../../hooks/UseTodoContext";
import "./CreateTodoButton.scss";

function CreateTodoButton() {
  const { showModal, setShowModal } = useTodoContext();

  const onCreateToDo = () => {
    setShowModal(!showModal);
  };

  return (
    <button className="create-button" type="button" onClick={onCreateToDo}>
      &#x271A;
    </button>
  );
}

export { CreateTodoButton };
