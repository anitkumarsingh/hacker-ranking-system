import { actionTypes } from '../actions';

const {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
  IS_LOADING
} = actionTypes;

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const fetchUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { loading: true };
    case FETCH_USERS_SUCCESS:
      return { loading: false, users: action.payload };
    case FETCH_USERS_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
