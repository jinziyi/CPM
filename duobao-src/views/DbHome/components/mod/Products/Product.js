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
import ProgressBar from '../../../../../component/ProgressBar';
import vars from '../../../../../style/vars';
import commonStyle from '../../../../../style';
import {ProductStyle} from './style';
import Dimensions from 'Dimensions';

const {width, height} = Dimensions.get('window');

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const props = this.props;
        const state = this.state;
        const {imgSrc, title, link, current_people_number, total_people_number} = props;
        return (
            <View style={styles.product}>
                <TouchableWithoutFeedback onPress={this.handlers('openWebView').bind(this, link)}>
                    <View style={[styles.container]}>
                        <View style={[styles.imgBox]}>
                            <Image resizeMode={'contain'} source={{uri: imgSrc}} style={styles.img}/>
                        </View>
                        <View style={[styles.titleBox]}>
                            <Text style={styles.title} numberOfLines={2}>{title}</Text>
                        </View>
                        <View style={[styles.infoBox]}>
                            <View style={[styles.progress]}>
                                <View style={[vars.fns.padding('Bottom')(10)]}>
                                    <Text style={[vars.fns.fontSize(12)]}>揭晓进度：<Text
                                        style={styles.primary}>{this.getData('progress')(current_people_number, total_people_number)}%</Text></Text>
                                </View>
                                <View>
                                    <ProgressBar
                                        width={80}
                                        color={vars.vars.primary}
                                        progress={this.getData('progress')(current_people_number, total_people_number)}/>
                                </View>
                            </View>
                            <View style={[styles.btn]}>
                                <TouchableWithoutFeedback>
                                    <View>
                                        <Text style={styles.btn_text}>立即夺宝</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }

    handlers(type) {
        return {
            openWebView(url){
                this.props.openWebView({url, title: '商品详情'})
            }
        }[type]
    }

    getData(type) {
        return {
            progress: (current, total) => Math.round(100 * current / total)
        }[type]
    }

}

const styles = StyleSheet.create(ProductStyle(vars, commonStyle, {width, height}));