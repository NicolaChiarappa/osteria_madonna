import React from "react";
import { IoMenu } from "react-icons/io5";

const Button = ({ style = "", onClick, icon = null, children }) => {
  return (
    <button
      className={"rounded-lg m-5 h-fit w-fit active:bg-transparent " + style}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
