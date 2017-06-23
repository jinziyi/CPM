import Expo, {Font} from 'expo';
import React from 'react';
import CPM from './src';

export default class App extends React.Component {
    componentDidMount() {
        Font.loadAsync({
            'fontawesome': require('./assets/fonts/fontawesome.ttf'),
        });
    }

    render() {
        return <CPM/>
    }
}

Expo.registerRootComponent(App);
