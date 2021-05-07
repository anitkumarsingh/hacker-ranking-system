import { actionTypes } from '../actions';

const initialState = {
  isLoading: false,
  error: ''
};

const hackersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: true,
        hackersList: action.payload
      };
    case actionTypes.FETCH_HACKERS_SUCCESS:
      return {
        ...state,
        hackersList: action.payload.hackers,
        hackersTypes: action.payload,
        isLoading: false
      };
    case actionTypes.HAS_ERROR:
      return {
        ...state,
        fetchFailed: true,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
export default hackersReducer;

export const hackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: true,
        hackerDetails: action.payload
      };
    case actionTypes.FETCH_HACKER_SUCCESS:
      return {
        ...state,
        hackerDetails: action.payload,
        isLoading: false,
        success: true
      };
    case actionTypes.HAS_ERROR:
      return {
        ...state,
        fetchFailed: true,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export const top3HackersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: true,
        top3Hackers: action.payload
      };
    case actionTypes.TOP_3_USER_SUCCESS:
      return { ...state, top3Hackers: action.payload, isLoading: false };
    case actionTypes.HAS_ERROR:
      return {
        ...state,
        fetchFailed: true,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export const updateHackerReducer = (state = { hacker: {} }, action) => {
  switch (action.type) {
    case actionTypes.HACKER_UPDATE_REQUEST:
      return { loading: true };
    case actionTypes.HACKER_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        message: 'Profile Updated Successfully!'
      };
    case actionTypes.HACKER_UPDATE_FAIL:
      return {
        loading: false,
        error: 'Token not provided. Please login to update your profile',
        success: false
      };
    case actionTypes.HACKER_UPDATE_RESET:
      return {
        hacker: {}
      };
    default:
      return state;
  }
};
