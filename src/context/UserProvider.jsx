import { useEffect, useState } from 'react';
import UserContext from './UserContext';

export default function UserProvider({ children }) {
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

  const increaseAge = () => {
    setUser((user) => ({ ...user, age: user.age + 1 }));
  };

  if (!user) {
    return <div>Loading......</div>;
  }

  return (
    <UserContext.Provider
      value={{
        ...user,
        increaseAge,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
