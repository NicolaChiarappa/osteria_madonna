import React from "react";

const HStack = ({ children, style = "" }) => {
  const string = "flex flex-row " + style;
  return <div className={string}>{children}</div>;
};

export default HStack;
