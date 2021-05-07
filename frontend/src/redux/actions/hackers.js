import { actionTypes } from './index';
import axios from 'axios';

export const fetchHackersList = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.IS_LOADING, payload: [] });
    const { data } = await axios.get('/api/hackers');
    dispatch({ type: actionTypes.FETCH_HACKERS_SUCCESS, payload: data });
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

export const fetchHackerById = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.IS_LOADING, payload: {} });
    const { data } = await axios.get(`/api/hackers/${id}`);
    dispatch({ type: actionTypes.FETCH_HACKER_SUCCESS, payload: data });
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

export const updateHacker = (hacker) => async (dispatch, getState) => {
  console.log('update', hacker);
  try {
    dispatch({ type: actionTypes.HACKER_UPDATE_REQUEST, payload: {} });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    };
    if (!userInfo.token && userInfo.id !== hacker._id) {
      dispatch({
        type: actionTypes.HAS_ERROR,
        error:
          'Not Authorized! Token not provided.Please login to update your profile'
      });
    }
    dispatch({ type: actionTypes.IS_LOADING, payload: {} });
    const { data } = await axios.put(
      `/api/hackers/${hacker._id}`,
      hacker,
      config
    );
    dispatch({ type: actionTypes.HACKER_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.HACKER_UPDATE_FAIL,
      payload:
        error.respose && error.respose.data.message
          ? error.respose.data.message
          : error.message
    });
  }
};

export const fetchTop3Hackers = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.IS_LOADING, payload: {} });
    const { data } = await axios.get(`/api/hackers/top/3`);
    dispatch({ type: actionTypes.TOP_3_USER_SUCCESS, payload: data });
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
