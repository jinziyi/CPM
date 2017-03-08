/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    WebView
} from 'react-native';
import {color} from '../../../style/vars';

export default class Home extends Component {

    render() {
        const props = this.props;
        const {url} = props;
        return (
            <WebView
                source={{url}}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});