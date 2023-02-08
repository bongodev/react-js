function ListBuilder() {
  const list = ['Apple', 'Dell', 'HP', 'ASUS', 'ACER', 'Samsung', 'Walton'];

  return (
    <div className="ListBuilder">
      <div className="Input">
        <input />
        <button>Add</button>
      </div>
      <div className="List">
        <ul>
          {list.map(function (item, index) {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default ListBuilder;
