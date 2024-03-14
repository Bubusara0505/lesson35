
import React, { useState, useEffect } from 'react';

function CounterPage() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [counter]);

  return (
    <div>
      <h2>Counter Page</h2>
      <p>Счётчик: {counter}</p>
    </div>
  );
}

export default CounterPage;
