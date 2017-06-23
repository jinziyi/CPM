/**
 * Created by cjy on 16/11/23.
 */
import {vars} from '../style/vars';
import MainScreen from '../views/MainScreen/index';
import ProfileScreen from '../views/ProfIleScreen/index';

export const RouteConfigs = {
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
};

export const navigatorOptions = {
    tabBarOptions: {
        activeTintColor: vars.primary,
        showIcon: true,
        style: {
            backgroundColor: '#efefef',
        },
    },
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    mode: 'modal',
    initialRouteName: 'Main',
    cardStyle: {
        alignSelf: 'center'
    }
};

