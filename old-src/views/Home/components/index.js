/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    PixelRatio
} from 'react-native';
import {color} from '../../../style/vars';
import Detail from '../../Detail';

export default class Home extends Component {

    render() {
        const props = this.props;
        console.log(props)
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.list_item} onPress={this.goTo.bind(this)}>豪华游轮济州岛3日游</Text>
                <Text style={styles.list_item} onPress={this.goTo.bind(this)}>豪华游轮济州岛3日游</Text>
                <Text style={styles.list_item} onPress={this.goTo.bind(this)}>豪华游轮济州岛3日游</Text>
                <Text style={styles.list_item} onPress={this.goTo.bind(this)}>豪华游轮济州岛3日游</Text>
                <Text style={styles.list_item} onPress={this.goTo.bind(this)}>豪华游轮济州岛3日游</Text>
                <Text style={styles.list_item} onPress={this.goTo.bind(this)}>豪华游轮济州岛3日游</Text>
                <Text style={styles.list_item} onPress={this.goTo.bind(this)}>豪华游轮济州岛3日游</Text>
                <Text style={styles.list_item} onPress={this.goTo.bind(this)}>豪华游轮济州岛3日游</Text>
                <Text style={styles.list_item} onPress={this.goTo.bind(this)}>豪华游轮济州岛3日游</Text>
                <Text style={styles.list_item} onPress={this.goTo.bind(this)}>豪华游轮济州岛3日游</Text>
                <Text style={styles.list_item} onPress={this.goTo.bind(this)}>豪华游轮济州岛3日游</Text>
                <Text style={styles.list_item} onPress={this.goTo.bind(this)}>豪华游轮济州岛3日游</Text>
                <Text style={styles.list_item} onPress={this.goTo.bind(this)}>豪华游轮济州岛3日游</Text>
                <Text style={styles.list_item} onPress={this.goTo.bind(this)}>豪华游轮济州岛3日游</Text>
                <Text style={styles.list_item} onPress={this.goTo.bind(this)}>豪华游轮济州岛3日游</Text>
                <Text style={styles.list_item} onPress={this.goTo.bind(this)}>豪华游轮济州岛3日游</Text>
                <Text style={styles.list_item} onPress={this.goTo.bind(this)}>豪华游轮济州岛3日游</Text>
            </ScrollView>
        )
    }
    goTo(){
        console.log(this)
        this.props.navigator.push({
            component: Detail,
            title: '邮轮详情',
            rightButtonTitle: '购物车',
            onRightButtonPress: () => {
                alert('进入我的购物车')
            }
        });
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list_item:{
        color: '#f00'
    }
});