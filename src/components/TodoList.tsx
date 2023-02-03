import React, { FormEvent, useState } from "react";
import { TodoContext } from "../providers/TodoProvider";
import TodoItem from "./TodoItem";

const TodoList: React.FC = (props) => {
  const context = React.useContext(TodoContext);

  return (
    <ul>
      {context.todoList.map((item) => (
        <TodoItem key={item.id} id={item.id} title={item.title} />
      ))}
    </ul>
  );
};

export default TodoList;
