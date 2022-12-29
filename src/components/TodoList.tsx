import React from "react";
import { TodoContext } from "../providers/TodoProvider";

const TodoList: React.FC = (props) => {
  const context = React.useContext(TodoContext);
  return (
    <ul>
      {context.todoList.map((item) => (
        <li key={item.id} onClick={context.removeTodo.bind(null, item.id)}>
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
