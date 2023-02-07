import './App.css';

function Student(props) {
  return (
    <div className="student">
      <h1>{`Name: ${props.name}`}</h1>
      <h2>{`Institute: ${props.institute}`}</h2>
      <h3>{`Department: ${props.department}`}</h3>
    </div>
  );
}

function App() {
  const student1 = {
    name: 'Mehedi Hasan',
    institute: 'Jahangirnagar University',
    department: 'CSE',
  };

  const student2 = {
    name: 'Nazmul Ahsan',
    institute: 'Jahangirnagar University',
    department: 'CSE',
  };

  return (
    <div className="App">
      <Student {...student1}></Student>
      <Student {...student2}></Student>
    </div>
  );
}

export default App;
