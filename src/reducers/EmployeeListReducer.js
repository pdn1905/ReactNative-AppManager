import { FETCH_EMPLOYEE_SUCCESS } from '../actions/type';

const INITIAL_STATE = {
    employees: []
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEE_SUCCESS:
            return { employees: action.payload };
        default:
            return state;
    }
};
