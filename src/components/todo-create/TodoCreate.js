import React, { Component } from "react";
import { TodoStoreContext } from "../../TodoStore";
import { Redirect } from "react-router-dom";
import "./TodoCreate.scss";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  value = {};
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.props.isUpdate) {
      this.props.context.updateTodo(this.props.id, this.value);
    } else {
      this.props.context.createTodo(this.value);
    }
    this.setState({
      redirect: true,
    });
  };

  handleChange = (e) => {
    this.value[e.target.name] = e.target.value;
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <>
        {this.props.render({
          handleSubmit: this.handleSubmit,
          handleChange: this.handleChange,
        })}
      </>
    );
  }
}

class TodoCreate extends Component {
  render() {
    return (
      <TodoStoreContext.Consumer>
        {(context) => {
          const id = this.props.match.params.idTodo;
          const todo = context.data.getTodo(id);
          return (
            <Form
              id={id}
              isUpdate={todo ? true : false}
              context={context}
              render={({ handleSubmit, handleChange }) => (
                <div className="TodoCreate card">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label">titre</label>
                      <input
                        onChange={handleChange}
                        defaultValue={todo ? todo.title : ""}
                        name="title"
                        type="text"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">message</label>
                      <textarea
                        defaultValue={todo ? todo.body : ""}
                        name="body"
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="form-action">
                      <button className="btn btn-primary">
                        {todo ? "Modifier" : "Ajouter"}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            />
          );
        }}
      </TodoStoreContext.Consumer>
    );
  }
}

export default TodoCreate;
