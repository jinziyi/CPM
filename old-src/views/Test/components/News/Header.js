/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    PixelRatio,
    View,
    Text
} from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const props = this.props;
        const state = this.state;
        const {} = props;
        const {} = state;
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>
                    <Text style={styles.font_1}>网易</Text>
                    <Text style={styles.font_2}>新闻</Text>
                    <Text>有态度</Text>
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        marginTop: 25,
        height: 40,
        borderBottomWidth: 3 / PixelRatio.get(),
        borderBottomColor: '#ef2d36',
        alignItems: 'center'
    },
    font: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    font_1: {
        color: '#cd1d1c'
    },
    font_2: {
        color: '#fff',
        backgroundColor: '#cd1d1c'
    }
});