import { useState } from 'react';
import AuthContext from './AuthContext';

export default function AuthProvider({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleLogin = () => setIsAuthorized(true);

  const handleLogout = () => setIsAuthorized(false);

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
