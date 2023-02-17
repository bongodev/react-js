import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('inside constructor', props);

    this.increment = this.increment.bind(this);
  }

  increment() {
    const previousCount = this.state.count;
    this.setState({
      count: previousCount + 1,
    });
    console.log('updating state:: ', this.state);
  }

  render() {
    console.log('rendering.............');
    const { componentName } = this.props;

    return (
      <div>
        <h1>{componentName}</h1>
        <div>
          <button onClick={this.increment}>+</button>
          <p>{this.state.count}</p>
          <button>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
