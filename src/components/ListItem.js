import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './Common/index';

class ListItem extends Component {

    onPressRow() {
        Actions.employeeEdit({ employee: this.props.employee });
    }

    render() {
        const { name } = this.props.employee;
        return (
        <TouchableWithoutFeedback onPress={this.onPressRow.bind(this)}>
        <View>
           <CardSection>
               <Text>{name}</Text>
           </CardSection>
        </View>
        </TouchableWithoutFeedback>
        );
    }
}

export default ListItem;
