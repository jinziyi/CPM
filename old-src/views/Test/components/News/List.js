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

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const props = this.props;
        const state = this.state;
        const {title} = props;
        const {} = state;
        return (
            <View style={styles.item}>
                <Text style={styles.font}>
                    {title}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent: 'center'
    },
    font: {
        fontSize: 16
    }
});