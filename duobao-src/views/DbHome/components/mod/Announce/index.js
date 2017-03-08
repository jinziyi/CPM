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
import Swiper from 'react-native-swiper';

export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const props = this.props;
        const state = this.state;
        const {notices = []} = props;
        return (
            <Swiper
                height={27}
                showButtons={false}
                style={styles.announce}
                horizontal={false}
                autoplay
                autoplayTimeout={1.5}
                showsPagination={false}
            >
                {notices.map((notice, i) => (
                    <View style={styles.notice} key={i}>
                        <Text numberOfLines={1}>恭喜{notice.nick}{notice.time}获得{notice.product}</Text>
                    </View>
                ))}
            </Swiper>
        )
    }
}

const styles = StyleSheet.create(styleInfo(vars, commonStyle));