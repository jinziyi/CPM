/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    PixelRatio
} from 'react-native';
import News from './News';
import {color} from '../../../style/vars';

class Test extends Component {

    render() {
        const props = this.props;
        return (
            <View style={styles.container}>
                <View style={[styles.item, styles.center]}>
                    <Text style={[styles.font]}>酒店</Text>
                </View>
                <View style={[styles.item, styles.lineLeftRight]}>
                    <View style={[styles.center, styles.flex, styles.lineCenter]}>
                        <Text style={[styles.font]}>海外酒店</Text>
                    </View>
                    <View style={[styles.center, styles.flex]}>
                        <Text style={[styles.font]}>特惠酒店</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={[styles.center, styles.flex, styles.lineCenter]}>
                        <Text style={[styles.font]}>团购</Text>
                    </View>
                    <View style={[styles.center, styles.flex]}>
                        <Text style={[styles.font]}>客栈公寓</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export  default News;


const styles = StyleSheet.create({
    container: {
        height: 84,
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        padding: 2,
        backgroundColor: '#ff0067',
    },
    item: {
        flex: 1,
        height: 80,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex: {
        flex: 1
    },
    font: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    lineLeftRight: {
        borderLeftWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),
        borderColor: '#fff'
    },
    lineCenter: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#fff'
    }
});