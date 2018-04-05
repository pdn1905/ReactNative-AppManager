import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_EDIT, EMPLOYEE_DELETE } from '../actions/type';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
    uid: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
            return { ...state, ...INITIAL_STATE };
        case EMPLOYEE_EDIT:
            return INITIAL_STATE;
        case EMPLOYEE_DELETE: 
            return INITIAL_STATE;
        default:
            return state;
    }
};
