/**
 * Created by cjy on 16/11/23.
 */
import {vars} from '../style/vars';

import LoginScreen from '../views/LoginScreen';
import MainScreen from '../views/MainScreen';
import ProfileScreen from '../views/ProfileScreen';

export const navigatorConfigs = {
    Login: {screen: LoginScreen},
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
};

export const navigatorOptions = {
    tabBarOptions: {
        activeTintColor: vars.primary,
        style: {
            backgroundColor: '#efefef',
        },
    },
};

