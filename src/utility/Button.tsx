import React from "react";

const Button: React.FC<React.PropsWithChildren<{ config?: {} }>> = (props) => {
  return <button {...props.config}>{props.children}</button>;
};

export default Button;
