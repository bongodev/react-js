import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';
import { PersonName } from './PersonName';

const PersonAge = () => {
  const { age, increaseAge } = useContext(UserContext);

  return (
    <div>
      <h2>Age: {age}</h2>
      <button onClick={increaseAge}>+</button>
    </div>
  );
};

export default function Profile() {
  const { isAuthorized, handleLogin, handleLogout } = useContext(AuthContext);

  return isAuthorized ? (
    <div>
      <PersonName />
      <PersonAge />
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  ) : (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
