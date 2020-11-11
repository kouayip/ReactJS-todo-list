import React, { Component, useState } from "react";
import { generatePath, Link } from "react-router-dom";
import "./TodoElement.scss";

const TodoElement = (props) => {
  const [isTreated, isToggled] = useState(false);
  function update() {
    isToggled(!isTreated);
  }
  return (
    <div className="todoElement">
      <h2
        onClick={() => {
          props.toggleTodo(isTreated);
          update();
        }}
        className={
          "todoElement-title " + (props.todo.isTreated ? " isTreated" : "")
        }
      >
        {props.todo.title}
      </h2>
      <div className="todoElement-action">
        <Link
          edit={props.todo}
          to={generatePath("/update/:id", {
            id: props.todo.id,
          })}
          className="todoElement-action-link"
        >
          Modifier
        </Link>
        <Link
          to={generatePath("/details/:id", {
            id: props.todo.id,
          })}
          className="todoElement-action-link"
        >
          Détail
        </Link>
      </div>
    </div>
  );
};

export default TodoElement;
