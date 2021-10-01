import React from 'react';
import { useSelector } from 'react-redux';

function Alert({ messege }) {
  const isAdded = useSelector(state => state.is)
  return (
    <div className="position-fixed" style={{ top: "5rem", zIndex:20 }}>
      <h1>{messege}</h1>
    </div>
  )
}

export default Alert;