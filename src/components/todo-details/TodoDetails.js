import React from "react";
import { TodoStoreContext } from "../../TodoStore";
import "./TodoDetails.scss";

const TodoDetails = (props) => {
  return (
    <TodoStoreContext.Consumer>
      {(context) => {
        const todo = context.data.getTodo(props.match.params.idTodo);
        return todo ? (
          <div className="todoDetail card">
            <h3 className="todoDetail-title">{todo.title}</h3>
            <p className="todoDetail-body">{todo.body}</p>
            <div className="todoDetail-info">
              <p className="todoDetail-etat">
                Etat:<span>{todo.isTreated ? " validé" : " non validé"}</span>
              </p>
              {todo.treatmentDate ? (
                <p className="todoDetail-treatmentDate">
                  Valider le <span>{todo.treatmentDate}</span>
                </p>
              ) : null}
              <p className="todoDetail-createDate">
                Créer le <span>{todo.createDate}</span>
              </p>
              {todo.updateDate ? (
                <p className="todoDetail-updateDate">
                  Modifier le <span>{todo.updateDate}</span>
                </p>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="todoDetail card">
            <h4>Aucune correspondance</h4>
          </div>
        );
      }}
    </TodoStoreContext.Consumer>
  );
};
export default TodoDetails;
