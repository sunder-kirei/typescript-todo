import React, { PropsWithChildren, useState } from "react";

import Todo from "../models/todo";

export const TodoContext = React.createContext<{
  todoList: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
}>({ todoList: [], addTodo: () => {}, removeTodo: () => {} });

const TodoProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodoHandler = (title: string) => {
    const date = new Date();
    const newTodo = new Todo(date.toISOString(), title, false);
    setTodoList((state) => state.concat(newTodo));
  };

  const removeTodoHandler = (id: string) => {
    setTodoList((state) => state.filter((item) => item.id != id));
  };

  return (
    <TodoContext.Provider
      value={{
        todoList: todoList,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
