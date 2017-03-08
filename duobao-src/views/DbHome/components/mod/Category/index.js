/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    Image,
    TabBarIOS,
    TouchableOpacity,
    TouchableWithoutFeedback,
    PixelRatio
} from 'react-native';
import vars from '../../../../../style/vars';
import commonStyle from '../../../../../style';
import styleInfo from './style';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const props = this.props;
        const state = this.state;
        const {cats = [], active} = props;
        return (
            <View style={styles.category}>
                {cats.map((cat, i) => (
                    <TouchableWithoutFeedback key={i} onPress={cat.onPress.bind(this, cat.key)}>
                        <View style={[cat.key == active ? styles.active: styles.cat, styles.center]}>
                            <Text style={cat.key == active ? styles.active_text: styles.text}>{cat.text}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create(styleInfo(vars, commonStyle));