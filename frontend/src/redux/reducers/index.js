import { combineReducers } from 'redux';
import hackersReducer from './hackers';

const rootReducer = combineReducers({
  hackers: hackersReducer
});

export default rootReducer;
