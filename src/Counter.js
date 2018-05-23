import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions'

class Counter extends React.Component {
  state = { 
  	count: this.props.count
  }

  // increment = () => {
  //   console.log(this.state);
  //   this.props.dispatch({ type: 'INCREMENT' });
  // }

  // decrement = () => {
  //   console.log(this.state);
  //   this.props.dispatch({ type: 'DECREMENT' });
  // }

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

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const mapDispatchtoProps = (dispatch) => {
  return{
      increment: () => {
        dispatch(actions.increment);
      },

      decrement: () => {
        dispatch(actions.decrement);
      }
    };
} 



export default connect(mapStateToProps, mapDispatchtoProps)(Counter);