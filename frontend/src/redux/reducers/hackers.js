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
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, hackersList: action.payload, isLoading: false };
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
    case actionTypes.FETCH_PRODUCT_SUCCESS:
      return { ...state, hackerDetails: action.payload, isLoading: false };
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
