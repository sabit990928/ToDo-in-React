import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from '../actions/types';

const INITIAL_STATE = {
  user: null, error: '', isLoginSuccess: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      console.log(action.payload);
      return {
        ...state, isLoginSuccess: true, user: action.payload,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state, error: 'Authentication failed',
      };
    default:
      return state;
  }
};
