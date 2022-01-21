import * as types from '../actions/types';
import setAuthHeader from '../utils/setAuthHeader';

setAuthHeader();
const initialState = {
  isLoading: false,
  user: null,
  isLoading: true,
  error: null,
  token: localStorage.getItem('admin-token'),
  isAuthenticated: !!localStorage.getItem('admin-token'),
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOAD_ADMIN_USER_REQUEST:
    case types.LOGIN_ADMIN_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }

    case types.LOGIN_ADMIN_USER_SUCCESS: {
      localStorage.setItem('admin-token', payload.token);
      setAuthHeader();
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: payload.user,
        token: payload.token,
        error: null,
      };
    }
    case types.LOGIN_ADMIN_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }
    case types.LOAD_ADMIN_USER_FAILURE:
    case types.LOGOUT_ADMIN: {
      localStorage.removeItem('admin-token');
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        token: null,
        user: {},
      };
    }
    case types.LOAD_ADMIN_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: payload.user,
        error: null,
      };
    }
    default: {
      return state;
    }
  }
};
