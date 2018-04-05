import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { fetchEmployees } from '../actions/index';
import ListItem from './ListItem';


class EmployeeList extends Component {
    componentWillMount() {
        console.log('componentWillMount');
        this.props.fetchEmployees();
        this.createDataSource(this.props);        
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        console.log(employees);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return (<ListItem employee={employee} />);
    }

    render() {
        return (
            <ListView 
                style={{ flex: 1 }}
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
} 
const mapStateToProps = state => {
  const employees = _.map(state.employeeListReducer.employees, (val, uid) => {
        return { ...val, uid };
  });
  return { employees };
};
export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);
