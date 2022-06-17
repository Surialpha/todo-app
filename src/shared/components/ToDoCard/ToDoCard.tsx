import React from "react";
import "./ToDoCard.scss";
import { ToDoModel } from "../../models/ToDoModel";

function ToDoCard(props: {
  cardInfo: ToDoModel;
  onComplete: any;
  onDelete: any;
}) {
  return (
    <li>
      <span
        className={`check-task ${
          props.cardInfo.completed && "check-task-completed"
        }`}
        onClick={props.onComplete}
      >{`${
        props.cardInfo.completed
          ? String.fromCharCode(9745)
          : String.fromCharCode(9744)
      }`}</span>
      <p
        className={`task-text ${
          props.cardInfo.completed && "text-task-completed"
        }`}
      >
        {props.cardInfo.text}
      </p>
      <span className="close-task" onClick={props.onDelete}>
        &#10006;
      </span>
    </li>
  );
}

export { ToDoCard };
