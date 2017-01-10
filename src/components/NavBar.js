/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import {
    View,
    ListView,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import {color} from '../style/vars';

export class Nav extends Component {
    render() {
        const props = this.props;
        const state = this.state;
        const {style, title, isActive = false, activeTitle = title, icon, activeIcon = icon} = props;
        const {} = state;
        return (
            <View style={styles.root}>
                <Text>
                    {isActive ? activeIcon : icon}
                </Text>
                <Text style={styles.nav[isActive ? 'act' : 'def']}>{isActive ? activeTitle : title}</Text>
            </View>
        )
    }
}

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props;
        const state = this.state;
        const {style, navs} = props;
        const {} = state;

        let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(navs);

        return (
            <ListView
                dataSource={dataSource}
                renderRow={nav => <Nav {...nav}/>}
            />
        )
    }
}


const styles = StyleSheet.create({
    root: {
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    act: {
        color: color.primary
    },
    def: {
        color: '#ccc'
    }
});