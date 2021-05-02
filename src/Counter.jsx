import React, { useState } from 'react';

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [value, setValue] = useState(1);

  return (
    <div>
      <h1 data-testid='header'>Counter</h1>
      <h2 data-testid='counter'>{counterValue}</h2>
      <button
        onClick={() => setCounterValue(counterValue - value)}
        data-testid='sub-btn'>
        -
      </button>
      <input
        style={{ textAlign: 'center' }}
        type='number'
        data-testid='input'
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button
        onClick={() => setCounterValue(counterValue + value)}
        data-testid='add-btn'>
        +
      </button>
    </div>
  );
};

export default Counter;
