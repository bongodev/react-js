import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyState: 'dummy',
      count: 0,
    };
    console.log('inside constructor', props);

    this.increment = this.increment.bind(this);
  }

  increment(incrementBy) {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + incrementBy,
    }));
    console.log('updating state:: ', this.state);
  }

  render() {
    console.log('rendering.............');
    const { componentName } = this.props;
    const { count } = this.state;

    return (
      <div>
        <h1>{componentName}</h1>
        <div>
          <button onClick={() => this.increment(1)}>+</button>
          <p>{count}</p>
          <button onClick={() => this.increment(-1)}>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
