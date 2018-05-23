import React from 'react';

class Counter extends React.Component {
  state = { 
  	count: this.props.count
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.props.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.props.increment}>+</button>
        </div>
      </div>
    )
  }
}

export default Counter;