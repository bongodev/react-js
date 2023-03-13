import './App.css';
import Profile from './profile/Profile';

function App() {
  const user = {
    id: '1234',
    firstName: 'Adam',
    lastName: 'Wills',
    age: 50,
    address: {
      country: 'USA',
      city: 'NYC',
    },
    url: 'https://github.com/bongodev',
  };

  return (
    <div className="App">
      <Profile user={user} />
    </div>
  );
}

export default App;
