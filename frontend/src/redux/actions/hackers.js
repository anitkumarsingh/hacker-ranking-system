import { actionTypes } from './index';
import axios from 'axios';

export const fetchHackersList = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.IS_LOADING, payload: [] });
    const { data } = await axios.get('/api/hackers');
    dispatch({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: data });
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
    dispatch({ type: actionTypes.FETCH_PRODUCT_SUCCESS, payload: data });
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
