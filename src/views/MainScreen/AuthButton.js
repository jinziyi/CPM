import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {actions} from '../../redux/modules/auth';
import {navigateAction} from '../../redux/utils';

const AuthButton = ({logout, loginScreen, isLoggedIn}) => (
    <Button
        title={isLoggedIn ? 'Log Out' : 'Open Login Screen'}
        onPress={isLoggedIn ? logout : loginScreen}
    />
);

AuthButton.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    loginScreen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = {
    logout: () => actions.logout(),
    loginScreen: () => navigateAction('Login'),
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
