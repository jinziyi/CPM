import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Button from '../../components/Button';
import {actions} from '../../redux/modules/auth';
import styles from './style';

export class LoginScreen extends Component {

    componentWillReceiveProps(np) {
        const {isLoggedIn, navigation} = np;
        if (isLoggedIn) {
            navigation.navigateAction('Main');
        }
    }

    render() {
        const {isLoggedIn, navigation, onChangePassword, value} = this.props;
        const login = this.loin.bind(this);
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    请验证密码
                </Text>
                <View style={styles.inputBox}>
                    <TextInput
                        autoFocus={true}
                        placeholder='请输入密码'
                        onSubmitEditing={login}
                        returnKeyType="done"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={onChangePassword}
                        clearButtonMode={'while-editing'}
                        value={value}
                        style={styles.input}
                    />
                </View>
                <Button
                    onPress={() => isLoggedIn ? navigation.navigateAction('Main') : login()}
                    style={styles.button}>
                    Log In
                </Button>
            </View>
        )
    }

    loin() {
        const {value, login} = this.props;
        if (!value) {
            return alert('密码不能为空');
        }
        login();
    }
}

const mapStateToProps = state => {
    const {isLoggedIn, value} = state.auth;
    return {
        isLoggedIn,
        value,
    }
};

const mapDispatchToProps = {
    login: actions.login,
    onChangePassword: actions.onChangePassword
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
