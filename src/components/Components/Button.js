import React from "react";
import { IoMenu } from "react-icons/io5";

const Button = ({ style = "", onClick }) => {
  const string = "rounded-lg m-5" + style;
  return (
    <button className={string} onClick={onClick}>
      <IoMenu size='50px' color='#fbbe0e'></IoMenu>
    </button>
  );
};

export default Button;