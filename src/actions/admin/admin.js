import axios from 'axios';
import * as types from '../types';
import setAdminHeader from '../../utils/setAdminHeader';

export const loginAdminUser = (formData) => async (dispatch) => {
  dispatch({ type: types.LOGIN_ADMIN_USER_REQUEST });
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('admin/login', formData, config);
    dispatch({ type: types.LOGIN_ADMIN_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.LOGIN_ADMIN_USER_FAILURE, payload: error.response.data });
  }
};

export const logoutAdminUser = () => async (dispatch) => {
  dispatch({ type: types.LOGOUT_ADMIN });
};

export const loadAdminUser = () => async (dispatch) => {
  setAdminHeader();
  dispatch({ type: types.LOAD_ADMIN_USER_REQUEST });
  try {
    const res = await axios.get('admin/me');
    dispatch({ type: types.LOAD_ADMIN_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.LOAD_ADMIN_USER_FAILURE, payload: error.response.data });
  }
};
