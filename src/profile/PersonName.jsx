import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';

const UserPortfolioLink = () => {
  const [hoverCount, setHoverCount] = useState(0);
  const { firstName, lastName, url } = useContext(UserContext);

  useEffect(() => {
    hoverCount > 5 && alert(`You have hoverred ${hoverCount} times`);
  }, [hoverCount]);

  const updateHoverCount = () => {
    setHoverCount((hoverCount) => hoverCount + 1);
  };

  return (
    <a
      href={url}
      onMouseOver={updateHoverCount}
    >{`${firstName} ${lastName}`}</a>
  );
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
