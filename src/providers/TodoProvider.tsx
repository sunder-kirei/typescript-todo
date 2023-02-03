import React, { PropsWithChildren, useState } from "react";

import Todo from "../models/todo";

export const TodoContext = React.createContext<{
  todoList: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
  editTodo: (id: string, title: string) => void;
}>({
  todoList: [],
  addTodo: () => {},
  removeTodo: () => {},
  editTodo: () => {},
});

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

  const editTodoHandler = (id: string, title: string) => {
    const newTodoList = todoList.map((item) => {
      if (item.id == id) {
        item.title = title;
      }
      return item;
    });
    setTodoList(newTodoList);
  };

  return (
    <TodoContext.Provider
      value={{
        todoList: todoList,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
        editTodo: editTodoHandler,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
