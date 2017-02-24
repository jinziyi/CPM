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
} from 'react-native';
import {color} from '../../../style/vars';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const props = this.props;
        const state = this.state;
        const {} = state;
        return (
            <View style={styles.flex}>
                <View>
                    <TouchableHighlight
                        onPress={alert.bind(this, 'TouchableHighlight')}
                        underlayColor="#eee"
                    >
                        <Text style={styles.item}>TouchableHighlight</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={alert.bind(this, 'TouchableOpacity')}
                    >
                        <Text style={styles.item}>TouchableOpacity</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={alert.bind(this, 'TouchableOpacity btn')}
                    >
                        <View style={styles.btn}>
                            <Text style={styles.item}>TouchableOpacity btn</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        paddingTop: 70
    },
    item: {
        fontSize: 16,
    },
    btn: {
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 10,
        height: 50,
        backgroundColor: '#18b4ff',
        justifyContent: 'center',
        alignItems: 'center'
    }
});