import React from 'react';

const display = () => {
  const data = ["hello", "world"];
  const string = "I love React!";
  const number1 = 5;
  const number2 =6;

  return (
    <div>
      <p>{data.join(' ')}</p>
      <p>{number1}+{number2}={number1+number2}</p>
      <p>{string}</p>
    </div>
  )
}

export default display;