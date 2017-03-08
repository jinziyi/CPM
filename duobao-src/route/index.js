/**
 * Created by cjy on 16/11/23.
 */
import React from 'react';
import {
    View,
    Navigator,
    NavigatorIOS,
    StatusBar,
} from 'react-native';

import App from './routes';

export default class Routes extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    translucent
                    barStyle="default"
                />
                <NavigatorIOS
                    initialRoute={App}
                    style={{flex: 1}}
                />
            </View>
        );
    }
}