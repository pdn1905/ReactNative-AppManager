import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployListReducer from './EmployeeListReducer';

export default combineReducers({
    auth: AuthReducers,
    employeeForm: EmployeeFormReducer,
    employeeListReducer: EmployListReducer
    // employees: EmployeeFormReducer
});
