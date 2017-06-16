/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    AsyncStorage,
    AlertIOS,
    ActionSheetIOS,
    AppState,
    StatusBarIOS,
    NetInfo,
    Image,
    CameraRoll,
    VibrationIOS,
} from 'react-native';
import {color} from '../../../style/vars';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.getHotData();
    }

    render() {
        const props = this.props;
        const state = this.state;
        const {} = state;
        return (
            <ScrollView style={styles.box}>

            </ScrollView>
        )
    }

    getHotData(){
        fetch('http://1.weibo.com/aj/page/home', {
            method: 'post',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                // 'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
                'User-Agent': 'iPhone/Android'
            }
        }).then(data => {
            console.log(data);
            return data.json()
        }).then(console.log).catch(console.log)
    }
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        paddingTop: 50
    }
});