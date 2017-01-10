/**
 * Created by cjy on 16/11/23.
 */
import React from 'react';
import {
    View,
    Navigator
} from 'react-native';
import List from '../views/Test';

export default class RootRoute extends React.Component {
    render() {
        let defaultName = 'list';
        let defaultComponent = List;
        return (
            <Navigator
                initialRoute={{name: defaultName, component: defaultComponent}}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}/>
        );
    }
}