/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './redux';
import Root from './App';

export default class CPM extends Component {

    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}
