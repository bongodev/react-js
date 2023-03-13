import React, { useEffect, useState } from 'react';
import Profile from './profile/Profile';
import UserContext from './context/UserContext';

import './App.css';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    setTimeout(() => {
      setUser({
        id: '1234',
        firstName: 'Adam',
        lastName: 'Wills',
        age: 50,
        address: {
          country: 'USA',
          city: 'NYC',
        },
        url: 'https://github.com/bongodev',
      });
    }, 2000);
  }, []);

  if (!user) {
    return <div>Loading......</div>;
  }

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Profile />
      </UserContext.Provider>
    </div>
  );
}

export default App;
