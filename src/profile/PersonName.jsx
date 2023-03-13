import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const UserPortfolioLink = () => {
  const { firstName, lastName, url } = useContext(UserContext);

  return <a href={url}>{`${firstName} ${lastName}`}</a>;
};

class PersonName extends React.Component {
  render() {
    const { firstName, lastName } = this.context;
    return (
      <div>
        <h1>{`Name: ${firstName} ${lastName}`}</h1>
        <UserPortfolioLink />
      </div>
    );
  }
}

PersonName.contextType = UserContext;

export { PersonName };
