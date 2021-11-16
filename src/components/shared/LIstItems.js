import React from "react";

const ListItems = ({ children, classNames }) => {
  return (
      <li className={classNames}>{children}</li>
  );
};

export default ListItems;
