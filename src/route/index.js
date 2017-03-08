/**
 * Created by cjy on 16/11/23.
 */
import React from 'react';
import {
    View,
    Navigator,
    NavigatorIOS,
} from 'react-native';
import Touchable from '../views/Touchable';
import Home from '../views/Home';
import Test from '../views/Test';
import Image from '../views/Image';
import TabBar from '../views/TabBar';
import WebView from '../views/WebView';
import Api from '../views/Api';
import Xhr from '../views/Xhr';

export default class RootRoute extends React.Component {
    render() {

        return (
            <NavigatorIOS
                initialRoute={{
                    component: Image,
                    title: 'Api'
                }}
                style={{flex: 1}}
                />
        );
    }
}