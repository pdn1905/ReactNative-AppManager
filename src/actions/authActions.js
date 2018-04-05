import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, 
         PASSWORD_CHANGED, 
         LOGIN_USER_SUCCESS, 
         LOGIN_USER_FAIL,
          USER_LOGIN_PROCESSING
        } from './type';

export const emailChanged = (text) => ({
        type: EMAIL_CHANGED,
        payload: text
});

export const passwordChanged = (text) => ({
        type: PASSWORD_CHANGED,
        payload: text
});

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
      dispatch({ type: USER_LOGIN_PROCESSING });
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSucess(dispatch, user)).catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => loginUserSucess(dispatch, user))
        .catch((error) => loginUserFail(dispatch, error));
      });
    };
};

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error
  });
};

const loginUserSucess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};
