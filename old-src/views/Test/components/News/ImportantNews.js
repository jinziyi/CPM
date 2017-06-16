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

export default class ImportantNews extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const props = this.props;
        const state = this.state;
        const {news = []} = props;
        const {} = state;
        return (
            <View style={styles.flex}>
                <Text style={styles.title}>今日要闻</Text>
                {news.map((_news, i) => (
                    <Text
                        key={i}
                        onPress={alert.bind(this, _news)}
                        numberOfLines={2}
                        style={styles.item}
                    >{_news}</Text>
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#cd1d1c',
        marginLeft: 10,
        marginTop: 15
    },
    item: {
        fontSize: 15,
        fontWeight: 'bold',
        lineHeight: 20,
        marginLeft: 10,
        marginRight: 10
    },
});