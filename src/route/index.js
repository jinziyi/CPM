/**
 * Created by cjy on 16/11/23.
 */
import React from 'react';
import {
    View,
    Navigator,
    NavigatorIOS,
} from 'react-native';
import Home from '../views/Home';
import Test from '../views/Test';

export default class RootRoute extends React.Component {
    render() {

        return (
            <NavigatorIOS
                initialRoute={{
                    component: Home,
                    title: '首页'
                }}
                style={{flex: 1}}
                />
        );
    }
}