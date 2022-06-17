import React from "react";
import "./ToDoList.scss";
import { PropModel } from "../../models/PropChildrenModel";

function ToDoList(props: PropModel) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export { ToDoList };
