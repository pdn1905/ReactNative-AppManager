import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions/index';
import { Card, CardSection, Input, Button, Spinner } from './Common/index';

class LoginForm extends Component {


    onChangeEmail(email) {
       this.props.emailChanged(email);
    }

    onChangePassword(password) {
        this.props.passwordChanged(password);
    }

    onPressButton() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    
    renderError() {
        if (this.props.error) {
            return (
                <Text style={{ fontSize: 18, color: 'red', textAlign: 'center' }}>
                {this.props.error.message}
                </Text>
            );
        }
    }

    renderBottom() {
        if (this.props.isLoading) {
            return <Spinner size='small' />;
        }
        return (<Button onPress={this.onPressButton.bind(this)}>
                    Login
                </Button>);
    }

    render() {
        return (
        <Card>
            <CardSection style={{ height: 40 }} >
                <Input 
                label={'Email'} 
                value={this.props.email} 
                isSecure={false}
                placeholder={'usernam@gmail.com'} 
                onChangeText={this.onChangeEmail.bind(this)} 
                />
            </CardSection>
           <CardSection style={{ height: 40 }} >
            <Input 
              label={'Password'} 
              value={this.props.password} 
              isSecure 
              placeholder={'******'} 
              onChangeText={this.onChangePassword.bind(this)}
            />
           </CardSection>
           {this.renderError()}
            <CardSection>
                {this.renderBottom()}
            </CardSection>
        </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        user: state.auth.user,
        error: state.auth.error,
        isLoading: state.auth.isLoading
    };
};
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
