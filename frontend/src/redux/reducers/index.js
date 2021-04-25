import { combineReducers } from 'redux';
import hackersReducer, { hackerReducer } from './hackers';

const rootReducer = combineReducers({
  hackers: hackersReducer,
  hacker: hackerReducer
});

export default rootReducer;
