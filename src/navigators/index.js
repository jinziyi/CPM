import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {TabNavigator} from 'react-navigation';
import {vars} from '../style/vars';

import LoginScreen from '../views/LoginScreen';
import MainScreen from '../views/MainScreen';
import ProfileScreen from '../views/ProfileScreen';

export const AppNavigator = TabNavigator({
        Login: {screen: LoginScreen},
        Main: {screen: MainScreen},
        Profile: {screen: ProfileScreen},
    }, {
        tabBarOptions: {
            activeTintColor: vars.primary,
            style: {
                backgroundColor: '#efefef',
            },
        },
    }
);
