import { combineReducers } from 'redux';
import calculator from './calculator';
import app from './app'

const reducer = combineReducers({
  app,
  calculator,
});

export default reducer;
