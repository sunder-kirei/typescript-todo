import React, { useContext } from "react";

import Input from "../utility/Input";
import Button from "../utility/Button";
import { TodoContext } from "../providers/TodoProvider";

const AddTodo: React.FC = () => {
  const context = useContext(TodoContext);
  const ref = React.useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const title = ref.current?.value;
    if (title?.trim() == "") {
      return;
    }
    context.addTodo(title!);
    ref.current!.value = "";
    return;
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        title="Enter a todo"
        config={{ placeholder: "Enter a todo", type: "text", ref: ref }}
      />
      <Button config={{ type: "submit" }}>Add ToDo</Button>
    </form>
  );
};

export default AddTodo;
