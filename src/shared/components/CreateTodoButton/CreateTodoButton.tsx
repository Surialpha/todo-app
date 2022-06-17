import React from "react";
import "./CreateTodoButton.scss";

function CreateTodoButton() {
  const onCreateToDo = () => {
    console.log('Clicked')
  };

  return (
    <button className="create-button" onClick={onCreateToDo}>
      &#x271A;
    </button>
  );
}

export { CreateTodoButton };
