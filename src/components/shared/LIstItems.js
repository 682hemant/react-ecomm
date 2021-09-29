import React from 'react'

 const ListItems = ({ children, classNames }) => {
  return (
    <div>
      <li className={classNames}>{children}</li>
    </div>
  )
}

export default ListItems;