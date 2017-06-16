/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import {Text} from 'react-native';
import icon from 'react-native-iconic-font/fontawesome';
import {fns} from '../../style/vars';

export default ({i, fs = 20, tintColor, style = {}}) => <Text style={[fns.icon(fs, tintColor), style]}>{icon(i)}</Text>