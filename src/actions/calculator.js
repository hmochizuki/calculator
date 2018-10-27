import * as actionTypes from '../utils/actionTypes/calculator';

export const onNumClick = (number) => ({
  type: actionTypes.INPUT_NUMBER,
  number,
});
export const onPlusClick = () => ({
  type: actionTypes.PLUS,
});
export const onMinusClick = () => ({
  type: actionTypes.MINUS,
});
export const onClearClick = () => ({
  type: actionTypes.CLEAR,
  preNumber: 0,
  curNumber: 0,
  operatorType: '',
});
export const onEqualClick = () => ({
  type: actionTypes.EQUAL,
})
