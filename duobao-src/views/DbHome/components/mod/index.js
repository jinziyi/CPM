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
    PixelRatio
} from 'react-native';
import vars from '../../../../style/vars';
import commonStyle from '../../../../style';
import styleInfo from './style';
import Tabs from '../../../../component/Tabs';
import Banner from './Banner';
import Announce from './Announce';
import Category from './Category';
import Products from './Products';
import Menus from './Menus';

export default class DbHome extends Component {

    componentDidMount() {
        this.props.getData('homeData')()
    }

    render() {
        const props = this.props;
        const {tab, homeData = {}, cat, countType, catData = [], getData, handlers} = props;
        const {slider = [], notices = []} = homeData;
        return (
            <View style={[styles.container]}>
                <ScrollView style={[styles.main]}>
                    <Banner {...props} openWebView={handlers('openWebView')} slider={slider}/>
                    <Menus {...props} openWebView={handlers('openWebView')} tabs={getData('menus')(props)}
                                      active={tab}/>
                    <Announce notices={notices}/>
                    <Category active={cat} cats={getData('cats')(countType)}/>
                    <Products {...props} openWebView={handlers('openWebView')} products={catData}/>
                </ScrollView>
                <View style={styles.footer}>
                    <Tabs tabs={getData('footer')(props)} active={tab}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(styleInfo(vars, commonStyle));