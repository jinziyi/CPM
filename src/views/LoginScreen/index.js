import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Button, StyleSheet, Text, View} from 'react-native';
import {actions} from '../../redux/modules/auth';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export class LoginScreen extends Component {

    componentWillReceiveProps(np) {
        const {isLoggedIn, navigation} = np;
        if (isLoggedIn) {
            navigation.navigateAction('Main');
        }
    }

    render() {
        const {isLoggedIn, login, navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Screen A
                </Text>
                <Text style={styles.instructions}>
                    This is great
                </Text>
                <Button
                    onPress={() => isLoggedIn ? navigation.navigateAction('Main') : login()}
                    title="Log in"
                />
            </View>
        )
    };
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = {
    login: actions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
