import { useState } from 'react';

import './Calculator.css';

const OPERATIONS = ['+', '-', '*', '/'];

function Operation({ label, handleOnClick }) {
  return <button onClick={handleOnClick}>{label}</button>;
}

function Calculator() {
  const [numbers, setNumbers] = useState([0, 0]);
  const [result, setResult] = useState();

  function handleOnChange(value, index) {
    const newNumbers = [...numbers];
    newNumbers[index] = parseInt(value);
    setNumbers(newNumbers);
  }

  function handleOperation(operationType) {
    switch (operationType) {
      case '+':
        setResult(numbers[0] + numbers[1]);
        break;
      case '-':
        setResult(numbers[0] - numbers[1]);
        break;
      case '*':
        setResult(numbers[0] * numbers[1]);
        break;
      case '/':
        setResult(numbers[0] / numbers[1]);
        break;
      default:
        break;
    }
  }

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="input">
        {[0, 1].map((id) => (
          <input
            key={id}
            type="number"
            onChange={(e) => handleOnChange(e.target.value, id)}
          />
        ))}
      </div>
      <div className="operations">
        {OPERATIONS.map((operation, index) => (
          <Operation
            key={index}
            label={operation}
            handleOnClick={() => handleOperation(operation)}
          />
        ))}
      </div>
      <div>
        <h3>Result = {result}</h3>
      </div>
    </div>
  );
}

export default Calculator;
