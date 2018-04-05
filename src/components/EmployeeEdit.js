import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { employeeUpdate, updateEmployee, deleteEmployee } from '../actions/index';
import EmployeeForm from './EmployeeForm';
import { CardSection, Card, Button, Alert } from './Common/index';


class EmployeeEdit extends Component {
    state = { isShowAlert: false };
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onPressButton() {
        const { name, phone, shift } = this.props;
        const { uid } = this.props.employee;
        this.props.updateEmployee({ name, phone, shift, uid });
    }

    onAcceptAlert() {
        this.setState({ isShowAlert: !this.state.isShowAlert });
        const { uid } = this.props.employee;
        this.props.deleteEmployee({ uid });
    }

    onDeclineAlert() {
        this.setState({ isShowAlert: !this.state.isShowAlert });
    }
    render() {
        // console.log(this.props.employee);
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onPressButton.bind(this)}>
                        Edit Infor
                    </Button>
                </CardSection>
                <CardSection>
                     <Button 
                     onPress={() => { this.setState({ isShowAlert: !this.state.isShowAlert }); }}
                     >
                        Fire
                    </Button>
                </CardSection>
                <Alert 
                    visible={this.state.isShowAlert}
                    onAccept={this.onAcceptAlert.bind(this)}
                    onDecline={this.onDeclineAlert.bind(this)}
                >
                    Are you sure you want to delete this?
                </Alert>
            </Card>
        );
    }
}

const mapStateToPropsStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToPropsStateToProps, 
    { employeeUpdate, updateEmployee, deleteEmployee })(EmployeeEdit);
