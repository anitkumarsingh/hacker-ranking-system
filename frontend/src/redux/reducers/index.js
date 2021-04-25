import { combineReducers } from 'redux';
import hackersReducer, { hackerReducer } from './hackers';
import { userLoginReducer, userRegisterReducer } from './users';

const rootReducer = combineReducers({
  hackers: hackersReducer,
  hacker: hackerReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer
});

export default rootReducer;
