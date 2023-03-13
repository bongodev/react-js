import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const UserPortfolioLink = () => {
  const { firstName, lastName, url } = useContext(UserContext);

  return <a href={url}>{`${firstName} ${lastName}`}</a>;
};

export const PersonName = () => {
  const { firstName, lastName } = useContext(UserContext);

  return (
    <div>
      <h1>{`Name: ${firstName} ${lastName}`}</h1>
      <UserPortfolioLink />
    </div>
  );
};
