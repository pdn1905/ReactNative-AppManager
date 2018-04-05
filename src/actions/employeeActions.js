import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, 
         EMPLOYEE_CREATE, 
         FETCH_EMPLOYEE_SUCCESS,
         EMPLOYEE_EDIT,
         EMPLOYEE_DELETE
        } from './type';

export const employeeUpdate = ({ prop, value }) => {
    console.log(prop, value);
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
   return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.pop();
        });
    };
};

export const fetchEmployees = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            dispatch({ type: FETCH_EMPLOYEE_SUCCESS, payload: snapshot.val() });
        });
    };
};

export const updateEmployee = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE_EDIT });
            Actions.pop();
            }
        );
    };
};

export const deleteEmployee = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(() => {
            dispatch({ type: EMPLOYEE_DELETE }); 
            Actions.pop();
            }  
        );
    };
};