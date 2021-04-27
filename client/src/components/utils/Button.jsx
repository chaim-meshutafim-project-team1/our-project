import React from 'react';
// import './button.css';

function Button({text,onClick}) {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

export default Button
