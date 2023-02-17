import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log('inside constructor', props);
  }

  render() {
    console.log('rendering.............');
    const { componentName } = this.props;

    return (
      <div>
        <h1>{componentName}</h1>
        <div>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
