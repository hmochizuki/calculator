import * as actionTypes from '../utils/actionTypes/calculator';

const initialAppState = {
  preNumber: 0,
  curNumber: 0,
  operatorType: '',
  isEqualed: false,
  pagename: 'calculator',
};

const calculate = (preNumber, curNumber, operatorType) => {
  switch (operatorType) {
    case 'plus':
      return preNumber + curNumber
    case 'minus':
      return preNumber - curNumber
    case 'times':
      return preNumber * curNumber
    case 'divided':
      return preNumber / curNumber
    default:
      return 0
  }
}

const calculator = (state = initialAppState, action) => {
  if (action.type === actionTypes.INPUT_NUMBER) {
    return {
      ...state,
      curNumber: state.curNumber * 10 + action.number,
      isEqualed: false,
    };
  } else if (action.type === actionTypes.PLUS) {
    return {
      ...state,
      preNumber: state.curNumber,
      curNumber: 0,
      operatorType: 'plus',
      isEqualed: false,
    };
  } else if (action.type === actionTypes.MINUS) {
    return {
      ...state,
      preNumber:state.curNumber,
      curNumber: 0,
      operatorType: 'minus',
      isEqualed: false,
    };
    
  } else if (action.type === actionTypes.EQUAL) {
    const result = calculate(state.preNumber, state.curNumber, state.operatorType)
    return {
      ...state,
      preNumber: 0,
      curNumber: result,
      operatorType: '',
      isEqualed: true,
    };
  }
   else if (action.type === actionTypes.CLEAR) {
    return {
      ...state,
      curNumber: action.curNumber,
      isEqualed: true,
    };
  } else {
    return state;
  }
};

export default calculator;
