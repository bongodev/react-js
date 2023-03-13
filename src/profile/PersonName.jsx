const UserPortfolio = ({ firstName, lastName, url }) => {
  return <a href={url}>{`${firstName} ${lastName}`}</a>;
};

export const PersonName = ({ firstName, lastName, url }) => {
  return (
    <div>
      <h1>{`Name: ${firstName} ${lastName}`}</h1>
      <UserPortfolio firstName={firstName} lastName={lastName} url={url} />
    </div>
  );
};
