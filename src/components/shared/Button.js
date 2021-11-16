import React from "react";

export const Button = ({ classes, children, clickHandler, label }) => {
  return (
    <button className={classes} onClick={clickHandler}>
      {children || label}
    </button>
  );
};
