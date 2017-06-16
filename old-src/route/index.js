/**
 * Created by cjy on 16/11/23.
 */
import React from 'react';
import {
    View,
    Navigator,
    NavigatorIOS,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Touchable from '../views/Touchable';
import Home from '../views/Home';
import Test from '../views/Test';
import Image from '../views/Image';
import TabBar from '../views/TabBar';
import WebView from '../views/WebView';
import Api from '../views/Api';
import Xhr from '../views/Xhr';

export const AppNavigator = StackNavigator({
    Login: { screen: LoginScreen },
    Main: { screen: MainScreen },
    Profile: { screen: ProfileScreen },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
