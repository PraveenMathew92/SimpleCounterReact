import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  count: 42
};

function reducer(state = initialState, action) {
	console.log(action); 
  switch(action.type) {
    case 'INCREMENT':
    	console.log(state);
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
    	console.log(state);
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store = {store}>
    <Counter/>
  </Provider>
);

render(<App />, document.getElementById('root'));