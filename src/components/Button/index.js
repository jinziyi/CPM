/**
 * Created by cjy on 16/11/23.
 */

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {vars, fns} from '../../style';

const styles = StyleSheet.create({
    button: {
        ...fns.border(1, 'solid', vars.primary),
        ...fns.padding(5, 10),
        borderRadius: 5,
    },
    text: {
        color: vars.primary
    }
});

export default ({children, onPress, style = {}}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    </TouchableOpacity>
)