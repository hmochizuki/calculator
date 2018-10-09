import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/calculator';
import Calculator from '../components/Calculator/Caliculator'

const mapState = (state, ownProps) => ({
  calculator: state.calculator,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapState, mapDispatch)(Calculator);
