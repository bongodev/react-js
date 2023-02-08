import { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    console.log('updating state');
    setCount(count + 1);
    console.log('state update completed, but not updated immidiately', count);
    /**
     * the state count will be updated eventually
     * but as soon as the state count gets updated
     * the component will be re-rendered
     */
  };

  return (
    <div className="Counter">
      {console.log('rendering....')}
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
