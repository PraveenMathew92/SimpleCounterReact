import React from 'react';
import { render } from 'react-dom';
import Counter from './CounterContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
	console.log(action); 
  switch(action.type) {
    case 'INCREMENT':
    	console.log(state);
      if(state.count < 5){
        return {
          count: state.count + 1
        };
      }
      break;
    case 'DECREMENT':
    	console.log(state);
      if(state.count > 0){
        return {
          count: state.count - 1
        };
      }
      break;
  }
  return state;
}

const store = createStore(reducer);

const Apps = () => (
  <Provider store = {store}>
    <Counter />
  </Provider>
);

render(<Apps />, document.getElementById('root'));