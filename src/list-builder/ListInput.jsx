function ListInput({ handleOnChange, handleAddItem }) {
  return (
    <div className="Input">
      <input onChange={handleOnChange} />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
}

export default ListInput;
