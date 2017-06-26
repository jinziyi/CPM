/**
 * Created by cjy on 16/11/23.
 */

import React from 'react';
import {Text} from 'react-native';
import Icons from '@expo/vector-icons';

//export default ({i, fs = 20, tintColor, style = {}}) => <Text style={[fns.icon(fs, tintColor), style]}>{icon(i)}</Text>
export default ({i, fs = 20, family = 'fontawesome', color, style = {}}) => {
    const IconKeys = Object.keys(Icons);
    const Icon = Icons[IconKeys.find(e => e.toLowerCase() === family.toLowerCase())];

    return (
        <Icon name={i} color={color} size={fs} style={style}/>
    )
}