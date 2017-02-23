/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    PixelRatio
} from 'react-native';
import {color} from '../../../style/vars';

const onePT = 1 / PixelRatio.get();

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            value: null
        }
    }

    render() {
        const props = this.props;
        const state = this.state;
        const {show, value} = state;
        return (
            <View>
                <View style={[styles.flex, styles.flexDirection, styles.box]}>
                    <View style={styles.flex}>
                        <TextInput
                            onChangeText={value => this.toggle('show', value)}
                            style={styles.input}
                            value={value}
                            onEndEditing={this.toggle.bind(this, 'hide', value)}
                            placeholder={'请输入关键字'}
                            clearButtonMode={'while-editing'}
                            returnKeyType={'done'}/>
                    </View>
                    <View style={styles.btn}>
                        <Text style={styles.search}>搜索</Text>
                    </View>
                </View>
                {show ? <View style={styles.result}>
                        <Text onPress={this.toggle.bind(this, 'hide', '阿大使' + value + '大撒')} numberOfLines={1}
                              style={styles.item}>阿大使{value}大撒</Text>
                        <Text onPress={this.toggle.bind(this, 'hide', '阿大使' + value + '大撒')} numberOfLines={1}
                              style={styles.item}>阿大使{value}大撒</Text>
                        <Text onPress={this.toggle.bind(this, 'hide', '阿大使' + value + '大撒')} numberOfLines={1}
                              style={styles.item}>阿大使{value}大撒</Text>
                        <Text onPress={this.toggle.bind(this, 'hide', '阿大使' + value + '大撒')} numberOfLines={1}
                              style={styles.item}>阿大使{value}大撒</Text>
                        <Text onPress={this.toggle.bind(this, 'hide', '阿大使' + value + '大撒')} numberOfLines={1}
                              style={styles.item}>阿大使{value}大撒</Text>
                    </View> : null}
            </View>
        )
    }

    toggle(action, value) {
        this.setState({
            show: value == '' ? false : action == 'show',
            value
        })
    }
}

const styles = StyleSheet.create({
    box: {
        paddingTop: 100
    },
    flex: {
        flex: 1
    },
    flexDirection: {
        flexDirection: 'row',
    },
    topStatus: {
        marginTop: 25
    },
    input: {
        height: 45,
        borderWidth: 1,
        marginLeft: 5,
        paddingLeft: 5,
        borderColor: '#000',
        borderRadius: 4
    },
    btn: {
        width: 55,
        marginLeft: -5,
        marginRight: 5,
        backgroundColor: '#23beff',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    result: {
        marginTop: 50,
        marginLeft: -5,
        marginRight: 5,
        borderColor: '#ccc',
        borderWidth: onePT
    },
    item: {
        fontSize: 16,
        padding: 5,
        paddingTop: 10,
        borderWidth: onePT,
        borderColor: '#ddd',
        borderTopWidth: 0
    }
});