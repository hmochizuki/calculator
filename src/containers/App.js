import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header/Header'
import * as actions from '../actions/app';
import Main from './Main';

class App extends Component {
  render() {
    const { app, actions } = this.props;
    return (
    <dev>
      <Header onClick={() => actions.changeContents} app={app}/>
      <Main contents={app.contents}/>
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
