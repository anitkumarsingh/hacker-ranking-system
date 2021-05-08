import { actionTypes } from '../actions';

export const fetchWebsiteSettings = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SETTINGS_REQUEST:
      return { loading: true };
    case actionTypes.SETTINGS_SUCCESS:
      return { loading: false, webSettings: action.payload };
    case actionTypes.SETTINGS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateWebsiteSettings = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SETTINGS_UPDATE_REQUEST:
      return { loading: true };
    case actionTypes.SETTINGS_UPDATE_SUCCESS:
      return {
        loading: false,
        updateWebSettings: action.payload,
        success: true,
        message: 'Theme has been updated successfully'
      };
    case actionTypes.SETTINGS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
