/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    WebView,
    Image,
} from 'react-native';
import Dimensions from 'Dimensions';
import {color} from '../../../style/vars';
const _width = Dimensions.get('window').width;
const _height = Dimensions.get('window').height;


export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const props = this.props;
        const state = this.state;
        return (
            <WebView
                bounces={true}
                source={{
                    url: 'http://1.weibo.com'
                }}

            />

        )
    }

}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        paddingTop: 70,
        alignItems: 'center'
    }
});