import { PersonName } from './PersonName';

const PersonAge = ({ age }) => (
  <div>
    <h2>Age: {age}</h2>
  </div>
);

export default function Profile({ user }) {
  return (
    <div>
      <PersonName
        firstName={user.firstName}
        lastName={user.lastName}
        url={user.url}
      />
      <PersonAge age={user.age} />
    </div>
  );
}
