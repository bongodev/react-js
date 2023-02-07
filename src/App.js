import './App.css';

function Student() {
  const name = 'Kamrul Hasan';
  const institute = 'Jahangirnagar University';
  const department = 'CSE';

  return (
    <div>
      {
        // to write javascripts
        console.log('rendered')
      }
      <h1>{`Name: ${name}`}</h1>
      <h2>{`Institute: ${institute}`}</h2>
      <h3>{`Department: ${department}`}</h3>
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
