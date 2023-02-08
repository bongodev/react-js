import './App.css';

function Counter() {
  let count = 0;

  const handleIncrease = () => {
    count++;
    console.log(count);
  };

  return (
    <div className="Counter">
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
