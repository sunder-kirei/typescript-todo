import React, { useState, useContext } from "react";
import TodoProvider, { TodoContext } from "../providers/TodoProvider";

import EditTodo from "./EditTodo";
import Button from "../utility/Button";
import styles from "./TodoItem.module.css";

type propsType = {
  id: string;
  title: string;
};

const TodoItem: React.FC<propsType> = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const context = React.useContext(TodoContext);

  const editingHandler = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className={styles["todo-item--container"]}>
      {isEditing ? (
        <EditTodo
          id={props.id}
          title={props.title}
          editingHandler={editingHandler}
        />
      ) : (
        <React.Fragment>
          <li onClick={editingHandler}>{props.title}</li>
          <Button config={{ onClick: context.removeTodo.bind(null, props.id) }}>
            Delete Todo
          </Button>
        </React.Fragment>
      )}
    </div>
  );
};

export default TodoItem;
