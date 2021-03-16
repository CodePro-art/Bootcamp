import React from 'react';
import './basic.css';

const display = () => {
  const data = ["hello", "world"];
  const string = "I love React!";
  const number1 = 5;
  const number2 =6;

  return (
    <div className="basic">
      <p>{data.join(' ')}</p>
      <p>{number1}+{number2}={number1+number2}</p>
      <p>String length:{string.length}</p>
    </div>
  )
}

export default display;