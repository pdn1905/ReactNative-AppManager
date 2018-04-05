import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './Common/index';
import { employeeCreate } from '../actions/index';

class EmployeeCreate extends Component {
    onPressButton() {
        const { name, phone, shift } = this.props;
        console.log({ name, phone, shift });
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        console.log(this.props.employee);
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onPressButton.bind(this)}>
                        Add
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToPropsStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToPropsStateToProps, { employeeCreate })(EmployeeCreate);
