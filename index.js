/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import AppReducer from './src/reducers';
import Root from './src';

class CPM extends Component {
    store = createStore(AppReducer);

    render() {
        return (
            <Provider store={this.store}>
                <Root />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('CPM', () => CPM);
