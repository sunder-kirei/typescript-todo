import React from "react";

type propsType = {
  title: string;
  config?: any;
};

const Input: React.FC<propsType> = (props) => {
  return (
    <React.Fragment>
      <label htmlFor={props.config?.id}>{props.title}</label>
      <input {...props.config} />
    </React.Fragment>
  );
};

export default Input;
