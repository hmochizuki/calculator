import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header/Header'

class CalculatorContainer extends Component {
  render() {
    return (
      <div style={{textAlign:"center"}}>
        <Header/>
      </div>
    );
  }
}

export default connect()(CalculatorContainer);
