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
        const {slider} = props;
        return (
            <Swiper
                showButtons={true}
                style={styles.banner}
                autoplay
                height={125}
                paginationStyle={styles.pagination}
            >
                {slider.map((img, i) => (
                    <TouchableWithoutFeedback key={i} onPress={this.openWebView.bind(this, img.link)}
                                              style={[styles.box]}>
                        <Image
                            resizeMode={'contain'}
                            source={{uri: img.src}}
                            style={styles.img}
                        />
                    </TouchableWithoutFeedback>
                ))}
            </Swiper>
        )
    }

    openWebView(url) {
        console.log(url)
        this.props.openWebView({url, title: 'banner'});
    }
}

const styles = StyleSheet.create(styleInfo(vars, commonStyle));