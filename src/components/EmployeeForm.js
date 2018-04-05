
import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './Common/index';
import { employeeUpdate } from '../actions/index';

class EmployeeForm extends Component {

    onChangeName(name) {
        this.props.employeeUpdate({ prop: 'name', value: name });
    }
    onChangePhone(phone) {
        this.props.employeeUpdate({ prop: 'phone', value: phone });
    }

    onChangedPickerValue(pickerValue) {
        this.props.employeeUpdate({ prop: 'shift', value: pickerValue });
    }

    render() {
        console.log(this.props.employee);
        return (
            <View>
                <CardSection>
                    <Input  
                        label='Name'
                        placeholder='Jane'
                        value={this.props.name}
                        onChangeText={this.onChangeName.bind(this)}
                    />
                </CardSection>
                <CardSection>
                     <Input 
                        label='Phone' 
                        placeholder='5555-5555'
                        value={this.props.phone}
                        onChangeText={this.onChangePhone.bind(this)}
                     />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 15, paddingLeft: 16, paddingTop: 10 }}>Shift</Text>
                    <Picker 
                        onValueChange={this.onChangedPickerValue.bind(this)} 
                        selectedValue={this.props.shift}
                    >
                        <Picker.Item label='Monday' value='Monday' />
                        <Picker.Item label='Tuesday' value='Tuesday' />
                        <Picker.Item label='Wednesday' value='Wednesday' />
                        <Picker.Item label='Thursday' value='Thursday' />
                        <Picker.Item label='Friday' value='Friday' />
                        <Picker.Item label='Saturday' value='Saturday' />
                        <Picker.Item label='Sunday' value='Sunday' />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const mapStateToPropsStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default (connect(mapStateToPropsStateToProps, 
    { employeeUpdate }))(EmployeeForm);
