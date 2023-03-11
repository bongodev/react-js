import { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(0);

  useEffect(() => {
    console.log('executing useEffect hook 1');
    document.title = `Current count is ${count}`;
  }, [count]);

  useEffect(() => {
    console.log('executing useEffect hook 2');
    if (clicked >= 10 && count >= 10) {
      alert(`too much clicking ${clicked}`);
    }
  }, [clicked, count])

  const handleIncrease = () => {
    setCount(count + 1);
    setClicked((clicked) => clicked + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
    setClicked((clicked) => clicked + 1);
  };

  console.log('rendering.....');
  return (
    <div className="Counter">
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
}

export default Counter;
