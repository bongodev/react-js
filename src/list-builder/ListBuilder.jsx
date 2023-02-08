import { useState } from 'react';

import ListInput from './ListInput';
import List from './List';

import './ListBuilder.css';

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
      <List list={list} />
    </div>
  );
}

export default ListBuilder;
