import React from "react";
import { Todo } from "./Todo";

class TodoStore {
  constructor() {
    this._todos = [];
  }

  addTodo(title, message, isTreated = false) {
    this._todos.push(new Todo(title, message, isTreated));
  }

  removeTodo(id) {
    this._todos = this._todos.filter((t) => t.id !== id);
  }

  toggleTodo(id, toggle) {
    console.log(toggle);
    const todo = this.getTodo(id);
    if (todo) {
      todo.isTreated = !todo.isTreated;
      if (todo.isTreated) {
        todo.treatmentDate = new Date().toLocaleString();
      } else {
        todo.treatmentDate = "";
      }
    }
  }

  editTodo(id, title, body) {
    const todo = this.getTodo(id);
    if (todo && (title || body)) {
      if (title) todo.title = title;
      if (body) todo.body = body;
      todo.updateDate = new Date().toLocaleString();
    }
  }

  getTodos() {
    return this._todos;
  }

  getTodo(id) {
    const numId = parseInt(id);
    return this._todos.find((t) => t.id === numId);
  }
}

const TodoStoreContext = React.createContext({ data: new TodoStore() });

export { TodoStore, TodoStoreContext, Todo };
