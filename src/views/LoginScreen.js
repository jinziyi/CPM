import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {Button, StyleSheet, Text, View} from 'react-native';
import Icon from '../components/Icon';

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

class LoginScreen extends Component {

    componentWillReceiveProps(np) {
        const {isLoggedIn, MainScreen} = np;
        console.log(np)
        if (isLoggedIn) {
            MainScreen();
        }
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Screen A
                </Text>
                <Icon i='user'/>
                <Text style={styles.instructions}>
                    This is great
                </Text>
                <Button
                    onPress={() => navigation.dispatch({ type: 'Login' })}
                    title="Log in"
                />
            </View>
        )
    };
}

LoginScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
    title: 'Log In',
    tabBarIcon: ({tintColor}) => <Icon i='user' tintColor={tintColor}/>
};

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
    MainScreen: () =>
        dispatch(NavigationActions.navigate({routeName: 'Main'})),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
