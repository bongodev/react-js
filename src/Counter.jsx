import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyState: 'dummy',
      count: 0,
      user: {},
    };
    console.log('inside constructor', props);

    this.increment = this.increment.bind(this);
  }

  componentDidMount() {
    console.log('executing componentDidMount()....');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          return;
        }
        this.setState({
          user: data,
        });
      });
  }

  componentDidUpdate() {
    console.log('executing componentDidUpdate()....');
    const { count } = this.state;
    setTimeout(() => {
      if (count > 10) {
        alert('too much!!!!');
      } else if (count < 2) {
        alert('too low!!!!');
      }
    }, 1000);
  }

  increment(incrementBy) {
    if (this.state.count + incrementBy < 0) {
      alert('sorry!!! can not proceed to nefative');
      return;
    }
    this.setState({
      count: this.state.count + incrementBy,
    });
    console.log('updating state:: ', this.state);
  }

  render() {
    console.log('rendering.............');
    const { componentName } = this.props;
    const { count, user } = this.state;

    return (
      <div>
        {console.log('rendered.................')}
        <h1>{componentName}</h1>
        <div>
          <button onClick={() => this.increment(1)}>+</button>
          <p>{count}</p>
          <button onClick={() => this.increment(-1)}>-</button>
        </div>
        <p>{`Title is ${user.title}`}</p>
      </div>
    );
  }
}

export default Counter;
