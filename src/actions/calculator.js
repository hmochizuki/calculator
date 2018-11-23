import * as actionTypes from '../utils/actionTypes/calculator';

export const onNumClick = (number) => ({
  type: actionTypes.INPUT_NUMBER,
  number,
});
export const onClearClick = () => ({
  type: actionTypes.CLEAR,
});
export const onEqualClick = () => ({
  type: actionTypes.EQUAL,
})
export const onOperatorClick = ( type ) => ({
  type: type.toUpperCase(),
})
