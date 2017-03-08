/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import _style from './style';


export default class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const props = this.props;
        const state = this.state;
        const {progress, color = '#5b99ee', bgColor = '#ccc', width = 100, height = 2} = props;
        const styles = StyleSheet.create(_style(width, height, progress, color, bgColor));
        return (
            <View style={[styles.root]}>
                <View style={styles.bar}/>
            </View>
        )
    }
}