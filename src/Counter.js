import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  state = { 
  	count: this.props.count
  }

  increment = () => {
    console.log(this.state);
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    console.log(this.state);
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);