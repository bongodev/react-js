import React from 'react';
import Profile from './profile/Profile';
import UserProvider from './context/UserProvider';

import './App.css';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <UserProvider>
          <Profile />
        </UserProvider>
      </div>
    </AuthProvider>
  );
}

export default App;
