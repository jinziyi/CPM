/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    PixelRatio,
    View,
    Text
} from 'react-native';
import Header from './Header';
import List from './List';
import ImportantNews from './ImportantNews';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const props = this.props;
        const state = this.state;
        const {} = props;
        const {} = state;
        return (
            <View style={styles.flex}>
                <Header/>
                <List title="宇航员在太空宣布'三体'获奖"/>
                <List title="NASA发短片纪念火星征程50年"/>
                <List title="男生连续做一周苦瓜吃吐女友"/>
                <List title="女童遭鲨鱼袭击又下海救伙伴"/>
                <ImportantNews
                    news={[
                        '萨达省劳动局阿斯利康啦时间的卡拉斯京达拉斯萨达省劳动局阿斯利康啦时间的卡拉斯京达拉斯萨达省劳动局阿斯利康啦时间的卡拉斯京达拉斯萨达省劳动局阿斯利康啦时间的卡拉斯京达拉斯萨达省劳动局阿斯利康啦时间的卡拉斯京达拉斯萨达省劳动局阿斯利康啦时间的卡拉斯京达拉斯',
                        '萨达省劳动局阿斯利康啦时间的卡拉斯京达拉斯',
                        '萨达省劳动局阿斯利康啦时间的卡拉斯京达拉斯',
                        '萨达省劳动局阿斯利康啦时间的卡拉斯京达拉斯',
                    ]}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
       flex: 1
    }
});