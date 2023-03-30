import React from "react";

const HStack = ({ children, style = "" }) => {
  const string = "flex flex-row " + style;
  return <div className='flex flex-row'></div>;
};

export default HStack;
