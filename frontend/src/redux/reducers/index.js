import { combineReducers } from 'redux';
import hackersReducer, {
  hackerReducer,
  top3HackersReducer,
  updateHackerReducer
} from './hackers';
import {
  userLoginReducer,
  userRegisterReducer,
  fetchUsersReducer
} from './users';
import { fetchWebsiteSettings } from './settings';

const rootReducer = combineReducers({
  hackers: hackersReducer,
  hacker: hackerReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  top3Hackers: top3HackersReducer,
  users: fetchUsersReducer,
  settings: fetchWebsiteSettings,
  hackerUpdate: updateHackerReducer
});

export default rootReducer;
