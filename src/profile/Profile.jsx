import { useContext } from 'react';
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
  return (
    <div>
      <PersonName />
      <PersonAge />
    </div>
  );
}
