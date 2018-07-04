import firebase from 'firebase';

import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, SIGN_UP_USER } from './types';

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

export const signUpUser = ({ email, password, passwordAgain }) => async (dispatch) => {
  try {
    dispatch({ type: SIGN_UP_USER });
    if (password === passwordAgain) {
      const newUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
      return loginUserSuccess(dispatch, newUser);
    }
  } catch (signUpError) {
    console.error('signUpError: ', signUpError);
    return loginUserFail(dispatch);
  }
};

export const loginUser = ({ email, password }) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER });
    // console.log(email, password);
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return loginUserSuccess(dispatch, user);
  } catch (signInError) {
    console.error('signInError: ', signInError);
    return loginUserFail(dispatch);

    // try {
    //   const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
    //   loginUserSuccess(dispatch, user);
    // } catch (signUpError) {
    //   console.error(`signUpError: ${signUpError}`);
    //   loginUserFail(dispatch);
    // }
  }
};
