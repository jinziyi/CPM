/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

export default class Home extends Component {
    render() {
        const {count, reduce, add, title} = this.props;
        let reduceDisabled = count < 1;
        return (
            <View>
                <Text>{title}</Text>
                <TouchableHighlight onPress={e => add(1)}>
                    <Text style={{height: 40,fontSize: 40}}>+</Text>
                </TouchableHighlight>
                <Text style={{height: 40,fontSize: 40}}>{count}</Text>
                <TouchableHighlight onPress={e => reduceDisabled ? 0 : reduce(1)}>
                    <Text style={{height: 40,fontSize: 40}}>-</Text>
                </TouchableHighlight>
            </View>
        )
    }
}