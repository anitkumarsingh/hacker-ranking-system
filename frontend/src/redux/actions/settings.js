import axios from 'axios';
import { actionTypes } from './index';

export const getWebsiteSetting = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SETTINGS_REQUEST, payload: [] });
    const { data } = await axios.get('/api/web/setting');
    dispatch({ type: actionTypes.SETTINGS_SUCCESS, payload: data });
    localStorage.setItem('setting', JSON.stringify(data.settings[0]));
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

export const updateWebsiteSetting = (theme) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.SETTINGS_UPDATE_REQUEST, payload: [] });
    const {
      userLogin: { userInfo }
    } = getState();
    let themeId;
    if (localStorage.getItem('setting')) {
      themeId = JSON.parse(localStorage.getItem('setting'));
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    if (!userInfo.token && !userInfo.isAdmin) {
      dispatch({
        type: actionTypes.HAS_ERROR,
        error: 'Not Authorized! Theme updation is allowed for Admin users only'
      });
    }
    const { data } = await axios.put(
      `/api/web/setting/${themeId._id}`,
      theme,
      config
    );
    dispatch({ type: actionTypes.SETTINGS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.SETTINGS_UPDATE_FAIL,
      payload:
        error.respose && error.respose.data.message
          ? error.respose.data.message
          : error.message
    });
  }
};
