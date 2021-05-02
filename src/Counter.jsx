import React, { useState } from 'react';

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [value, setValue] = useState(1);

  return (
    <div>
      <h1 data-testid='header'>Counter</h1>
      <h2 data-testid='counter'>{counterValue}</h2>
      <button data-testid='sub-btn'>-</button>
      <input type='number' data-testid='input' value={value} />
      <button data-testid='add-btn'>+</button>
    </div>
  );
};

export default Counter;
