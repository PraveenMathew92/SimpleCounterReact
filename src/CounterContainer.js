import { connect } from 'react-redux';
import * as actions from './actions'
import Counter from './Counter'

const mapStateToProps = (state) => {
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