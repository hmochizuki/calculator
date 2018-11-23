import * as actionTypes from '../utils/actionTypes/calculator';

const initialAppState = {
  preNumber: 0,
  curNumber: 0,
  operatorType: '',
  pagename: 'calculator',
  isPushedOperator: false,
}

const calculate = (preNumber, curNumber, operatorType) => {
  switch (operatorType) {
    case 'plus':
      return preNumber + curNumber
    case 'minus':
      return preNumber - curNumber
    case 'times':
      return preNumber * curNumber
    case 'devided':
      return preNumber / curNumber
    default:
      return 0
  }
}

const calculator = (state = initialAppState, action) => {
  const { type } = action
  switch(type) {
    case actionTypes.INPUT_NUMBER:
      return {
        ...state,
        curNumber: state.curNumber * 10 + action.number,
        isPushedOperator: false,
      }
    case actionTypes.PLUS:
    case actionTypes.MINUS:
    case actionTypes.TIMES:
    case actionTypes.DEVIDED:
      return {
        ...state,
        preNumber: state.isPushedOperator ? state.preNumber : state.curNumber,
        curNumber: state.isPushedOperator ? state.curNumber : 0,
        operatorType: type.toLowerCase(),
        isPushedOperator: true,
      }
    case actionTypes.EQUAL:
      const result = calculate(state.preNumber, state.curNumber, state.operatorType)
      return {
        ...state,
        preNumber: 0,
        curNumber: result,
        operatorType: '',
        isPushedOperator: false,
      }
    case actionTypes.CLEAR:
      return {
        ...state,
        preNumber: 0,
        curNumber: 0,
        operatorType: '',
        isEqualed: true,
        isPushedOperator: false,
      }
    default:
      return state
    }
  }

export default calculator
