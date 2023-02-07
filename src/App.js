import './App.css';

function Student({ name, institute, department }) {
  return (
    <div className="student">
      <h1>{`Name: ${name}`}</h1>
      <h2>{`Institute: ${institute}`}</h2>
      <h3>{`Department: ${department}`}</h3>
    </div>
  );
}

function App() {
  const student1 = {
    name: 'Mehedi Hasan',
    institute: 'Jahangirnagar University',
    department: 'CSE',
  };

  return (
    <div className="App">
      <Student {...student1}></Student>
      <Student
        name={'Sabrina Sharmin'}
        institute={'RUET'}
        department={'ECE'}
      ></Student>
    </div>
  );
}

export default App;
