import { useState } from 'react';

function ListInput({ handleOnChange, handleAddItem }) {
  return (
    <div className="Input">
      <input onChange={handleOnChange} />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
}

function ListBuilder() {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState([]);

  function handleOnChange(event) {
    setNewItem(event.target.value);
  }

  function handleAddItem() {
    if (!newItem) {
      return;
    }
    setList([...list, newItem]);
  }

  return (
    <div className="ListBuilder">
      <ListInput
        handleAddItem={handleAddItem}
        handleOnChange={handleOnChange}
      />
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
