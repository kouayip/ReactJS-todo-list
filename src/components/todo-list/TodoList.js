import React, { Component } from "react";
import { Link } from "react-router-dom";
import TodoElement from "./TodoElement/TodoElement";
import { TodoStoreContext } from "../../TodoStore";
import "./TodoList.scss";

export default () => {
  return (
    <TodoStoreContext.Consumer>
      {(context) => (
        <>
          <div className="todoList card">
            {context.data.getTodos().map((t, index) => (
              <TodoElement
                toggleTodo={(toggle) => {
                  {
                    context.toggleTodo(t.id, toggle);
                  }
                }}
                key={t.id + index}
                todo={t}
              />
            ))}
          </div>
          <div className="todoList-action">
            <Link to="/add" className="btn btn-primary todoList-action-Add ">
              Créer un todo
            </Link>
          </div>
        </>
      )}
    </TodoStoreContext.Consumer>
  );
};
