/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    Image,
} from 'react-native';
import {color} from '../../../style/vars';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            imgs: [
                'http://www.ituring.com.cn/bookcover/1442.796.jpg',
                'http://www.ituring.com.cn/bookcover/1668.553.jpg',
                'http://www.ituring.com.cn/bookcover/1521.260.jpg',
            ]
        }
    }

    render() {
        const props = this.props;
        const state = this.state;
        const {imgs, active} = state;
        return (
            <View style={styles.flex}>
                <View>
                    <Image source={require('../images/react-native.png')}
                           style={{width: 200, height: 150}}
                           resizeMode="contain"
                    />
                </View>
                <View style={styles.image}>
                    <Image style={styles.img}
                           source={{uri: imgs[active]}}
                           resizeMode='contain'
                    />
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity onPress={this.turn.bind(this, active - 1)}>
                        <View style={styles.btn}>
                            <Text style={styles.item}>上一张</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.turn.bind(this, active + 1)}>
                        <View style={styles.btn}>
                            <Text style={styles.item}>下一张</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    turn(index) {
        this.setState(({imgs}) => ({
            active: index < 0 ? imgs.length - 1 : index >= imgs.length ? 0 : index
        }))
    }

}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        paddingTop: 70,
        alignItems: 'center'
    },
    item: {
        fontSize: 16,
        color: '#fff'
    },
    image: {
        borderWidth: 1,
        width: 300,
        height: 200,
        borderRadius: 10,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 200,
        height: 150
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        flex: 1
    },
    btn: {
        width: 60,
        borderRadius: 5,
        height: 30,
        backgroundColor: '#18b4ff',
        justifyContent: 'center',
        alignItems: 'center'
    }
});