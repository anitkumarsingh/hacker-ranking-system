import { combineReducers } from 'redux';
import hackersReducer, { hackerReducer, top3HackersReducer } from './hackers';
import {
  userLoginReducer,
  userRegisterReducer,
  fetchUsersReducer
} from './users';

const rootReducer = combineReducers({
  hackers: hackersReducer,
  hacker: hackerReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  top3Hackers: top3HackersReducer,
  users: fetchUsersReducer
});

export default rootReducer;
