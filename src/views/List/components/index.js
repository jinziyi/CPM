/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import {color} from '../../../style/vars';
import NavBar from '../../../components/NavBar';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class List extends Component {
    render() {
        const props = this.props;
        const state = this.state;
        const {count, reduce, add, title} = props;
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
                <View>
                    <NavBar
                        navs={this.getNavs(props, state)}
                    />
                </View>
            </View>
        )
    }
    getNavs(props, state){
        return [
            {
                title: '列表',
                icon: <Icon name="list" size={30}/>,
                activeIcon: <Icon name="list" size={30} color={color.primary}/>
            },
            {
                title: '新增',
                icon: <Icon name="plus" size={30}/>,
                activeIcon: <Icon name="plus" size={30} color={color.primary}/>
            },
        ]
    }
}