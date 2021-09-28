import React from 'react'

const IndicatorSpan = ({activeClass,ariaHidden,children}) => {
  return (
    <div>
      <span className={activeClass} aria-hidden={ariaHidden}>{children}</span>
    </div>
  )
}
export default IndicatorSpan;
