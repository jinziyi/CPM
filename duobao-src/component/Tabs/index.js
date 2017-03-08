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


export default class Tabs extends Component {
    render() {
        const props = this.props;
        const {tabs = [], active = ''} = props;
        return (
            <View style={[styles.root]}>
                {tabs.map((tab, i) => (
                    <TouchableWithoutFeedback key={i} style={[styles.tab]} onPress={tab.onPress}>
                        <View style={styles.box}>
                            <Image
                                source={active == tab.key ? tab.activeIcon : tab.icon}
                                style={styles.img}
                            />
                            <Text style={styles.tab_text}>{tab.text}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create(_style);