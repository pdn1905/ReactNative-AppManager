import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='auth'>
                    <Scene key='login' component={LoginForm} title='Please Login' />
                </Scene>
                <Scene key='main'>
                    <Scene 
                    rightTitle='Add'
                    onRight={() => { Actions.createEmployee(); }}
                    key='employeeList' 
                    component={EmployeeList} 
                    title='Employee' 
                    />
                    <Scene 
                      key='createEmployee' 
                      component={EmployeeCreate} 
                      title='Create Employee' 
                      backTitle=' '
                    />
                    <Scene 
                      key='employeeEdit' 
                      component={EmployeeEdit} 
                      title='Edit Employee' 
                      backTitle=' '
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
