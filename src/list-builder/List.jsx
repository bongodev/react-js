function List({ list }) {
  return (
    <div className="List">
      <ul>
        {list.map(function (item, index) {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
