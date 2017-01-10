/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import {
    ActivityIndicator,
    Button,
    DatePickerIOS,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import {color} from '../../../style/vars';

export default class Test extends Component {

    state = {
        date: new Date()
    };

    setDate(date){
        this.setState({
            date
        })
    }

    render() {
        const props = this.props;
        const state = this.state;
        const {date} = state;
        return (
            <View style={{flexDirection: 'row', height: 100, padding: 20}}>
                <View style={{backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', flex: 0.3}}>
                    <ActivityIndicator size={0}/>
                </View>
                <View style={{backgroundColor: 'red', flex: 0.5}}>
                    <Button
                        onPress={this.alert.bind(this, 'this is a button')}
                        title={'click me'}
                        color={color.primary}
                    />
                </View>
                <View>
                    <DatePickerIOS onDateChange={this.setDate.bind(this)} date={date}/>
                </View>
            </View>
        )
    }

    alert(data){
        alert(data)
    }
}