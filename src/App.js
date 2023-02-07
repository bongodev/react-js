import './App.css';

function Student() {
  return (
    <div>
      <h1>Name: Kamrul Hasan</h1>
      <h2>Institute: Jahangirnagar University</h2>
      <h3>Department: CSE</h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Student></Student>
    </div>
  );
}

export default App;
