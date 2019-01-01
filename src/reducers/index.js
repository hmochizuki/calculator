import { combineReducers } from 'redux';
import calculator from './calculator';
import app from './app'
import reversi from './reversi'

const reducer = combineReducers({
  app,
  calculator,
  reversi,
});

export default reducer;
