import React from 'react';
import {Font} from 'expo';
import CPM from './src';

export default class APP extends React.Component {
    componentDidMount() {
        Font.loadAsync({
            'fontawesome': require('./assets/fonts/fontawesome.ttf'),
        });
    }

    render(){
        return <CPM/>
    }
}
