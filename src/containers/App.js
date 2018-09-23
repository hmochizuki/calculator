import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header/Header'
import CalculatorContainer from './CalculatorContainer'
import * as actions from '../actions/app';

class App extends Component {
  render() {
    const { app, actions } = this.props;
    return (
    <dev>
      <Header onClick={() => actions.changeContents} status={app.status}/>
      <CalculatorContainer />
    </dev>
    );
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

export default connect(mapState, mapDispatch)(App);
