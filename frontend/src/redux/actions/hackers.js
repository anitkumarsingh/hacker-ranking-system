import { actionTypes } from './index';
import axios from 'axios';

export const fetchHackersList = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.IS_LOADING, payload: [] });
    const { data } = await axios.get('/api/hackers');
    console.log('as', data);
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
