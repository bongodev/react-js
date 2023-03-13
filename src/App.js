import React from 'react';
import Profile from './profile/Profile';
import UserProvider from './context/UserProvider';

import './App.css';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Profile />
      </UserProvider>
    </div>
  );
}

export default App;
