import React from 'react'
import '../Styles/CustomCursor.css'

const CustomCursor = ({position}) => {
  const { x, y } = position;

  return (
  <div className="custom-cursor" style={{ left: x, top: y, opacity: 0.5 }}></div>
  );
}

export default CustomCursor