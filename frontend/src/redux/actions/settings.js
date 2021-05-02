import axios from 'axios';
import { actionTypes } from './index';

export const getWebsiteSetting = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.IS_LOADING, payload: [] });
    const { data } = await axios.get('/api/web/setting');
    dispatch({ type: actionTypes.SETTINGS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.HAS_ERROR,
      payload:
        error.respose && error.respose.data.message
          ? error.respose.data.message
          : error.message
    });
  }
};
