
import React, { useState } from 'react';

function HomePage() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleClick}>Click me</button>
      <p>Вы нажимали кнопку {count} раз</p>
    </div>
  );
}

export default HomePage;
