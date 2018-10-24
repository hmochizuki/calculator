import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/app';
import Calculator from './CalculatorContainer'

const Main = ({ contents }) => {
  switch(contents) {
    case 'calculator':
      return(
        <div>
          <Calculator contents={contents}/>
        </div>
      )
    default:
      return(
        <div>
          coming soon!
        </div>
      )
  }
}

const mapState = (state, ownProps) => ({
  app: state.app,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapState, mapDispatch)(Main);
