import React from "react";

const VStack = ({ children, style }) => {
  const string = "flex flex-col " + style;
  console.log(string);
  return <div className={string}>{children}</div>;
};

export default VStack;
