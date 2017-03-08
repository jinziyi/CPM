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
import Product from './Product';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const props = this.props;
        const state = this.state;
        const {products = []} = props;
        return (
            <View style={styles.products}>
                {products.map((cat, i) => (
                    <Product {...props} key={i} {...cat}/>
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create(styleInfo(vars, commonStyle));