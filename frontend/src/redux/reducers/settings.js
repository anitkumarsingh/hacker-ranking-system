import { actionTypes } from '../actions';

export const fetchWebsiteSettings = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.IS_LOADING:
      return { loading: true };
    case actionTypes.SETTINGS_SUCCESS:
      return { loading: false, websettings: action.payload };
    case actionTypes.SETTINGS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
