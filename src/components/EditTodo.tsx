import React from "react";
import { TodoContext } from "../providers/TodoProvider";

type propsType = {
  id: string;
  title: string;
  editingHandler: () => void;
};

const EditTodo: React.FC<propsType> = (props) => {
  const [input, setInput] = React.useState(props.title);

  const context = React.useContext(TodoContext);
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <input
      type="text"
      value={input}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
      }}
      onBlur={() => {
        if (input == "") context.removeTodo(props.id);
        else context.editTodo(props.id, input);
        props.editingHandler();
      }}
      onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key == "Enter") {
          if (input == "") context.removeTodo(props.id);
          else context.editTodo(props.id, input);
          props.editingHandler();
        }
        if (event.key == "Escape") {
          props.editingHandler();
        }
      }}
      ref={ref}
    />
  );
};

export default EditTodo;
