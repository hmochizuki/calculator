import React, { Component } from 'react';

import Result from './Result'
import NumBtn from './NumBtn'
import OperatorBtn from './OperatorBtn'

class Calculator extends Component {
  render() {
    const { calculator, actions } = this.props
    const isNotInputed = !(calculator.curNumber || calculator.preNumber)
    return (
      <div style={{textAlign:"center"}}>
        <Result result={ calculator.curNumber} maxLength={5}/>
        <div>
          <NumBtn n={1} onClick={() => actions.onNumClick(1)} />
          <NumBtn n={2} onClick={() => actions.onNumClick(2)} />
          <NumBtn n={3} onClick={() => actions.onNumClick(3)} />
          <OperatorBtn writing='÷' disabled={isNotInputed} onClick={actions.onDevidedClick} />
        </div>
        <div>
          <NumBtn n={4} onClick={() => actions.onNumClick(4)} />
          <NumBtn n={5} onClick={() => actions.onNumClick(5)} />
          <NumBtn n={6} onClick={() => actions.onNumClick(6)} />
          <OperatorBtn writing='×' disabled={isNotInputed} onClick={actions.onTimesClick} />
        </div>
        <div>
          <NumBtn n={7} onClick={() => actions.onNumClick(7)} />
          <NumBtn n={8} onClick={() => actions.onNumClick(8)} />
          <NumBtn n={9} onClick={() => actions.onNumClick(9)} />
          <OperatorBtn writing='+' disabled={isNotInputed} onClick={actions.onPlusClick} />
        </div>
        <div>
          <NumBtn n={0} onClick={() => actions.onNumClick(0)} />
          <OperatorBtn writing='C' onClick={actions.onClearClick} />
          <OperatorBtn writing='=' disabled={!calculator.operatorType} onClick={actions.onEqualClick} />
          <OperatorBtn writing='-' disabled={isNotInputed} onClick={actions.onMinusClick} />
        </div>
      </div>
    );
  }
}

export default Calculator
