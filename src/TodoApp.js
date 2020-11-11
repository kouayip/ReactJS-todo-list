import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { TodoList, TodoCreate, TodoDetails } from "./components";
import { TodoStoreContext, TodoStore } from "./TodoStore";
import "./scss/style.scss";
import "./TodoApp.scss";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.data = new TodoStore();
    this.data.addTodo(
      "Todo React.JS",
      "créer une application type CRUD avec React.JS!",
      true
    );
    this.state = {
      data: this.data,
    };
  }

  createTodo(values) {
    this.data.addTodo(values.title, values.body);
  }

  updateTodo(id, values) {
    this.data.editTodo(id, values.title, values.body);
  }

  toggleTodo(id, toggle) {
    this.data.toggleTodo(id, toggle);
  }

  render() {
    console.log("render");
    return (
      <Router>
        <div>
          <div className="container">
            <Link to="/">
              <h1 className="todo-title">Todo List</h1>
            </Link>
            <TodoStoreContext.Provider
              value={{
                data: this.state.data,
                createTodo: this.createTodo,
                updateTodo: this.updateTodo,
                toggleTodo: this.toggleTodo,
              }}
            >
              <Switch>
                <Route path="/list" component={TodoList} />
                <Route path="/add" component={TodoCreate} />
                <Route path="/update/:idTodo" component={TodoCreate} />
                <Route path="/details/:idTodo" component={TodoDetails} />
                <Route path="/" component={TodoList} />
              </Switch>
            </TodoStoreContext.Provider>
          </div>
        </div>
      </Router>
    );
  }
}

export default TodoApp;
