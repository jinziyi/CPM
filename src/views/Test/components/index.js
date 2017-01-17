/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import {
    ActivityIndicator,
    Button,
    DatePickerIOS,
    View,
    Image,
    WithLabel,
    Heading,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import {color} from '../../../style/vars';

export default class Test extends Component {

    static defaultProps = {
        date: new Date(),
        timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
    }

    state = {
        date: new Date(),
        timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
    };

    setDate(date) {
        this.setState({
            date
        })
    }

    onDateChange(date) {
        this.setState({date: date});
    }

    onTimezoneChange(event) {
        let offset = parseInt(event.nativeEvent.text, 10);
        if (isNaN(offset)) {
            return;
        }
        this.setState({timeZoneOffsetInHours: offset});
    }

    alert(data){
        alert(data);
    }

    render() {
        const props = this.props;
        const state = this.state;
        const {date} = state;
        return (
            <View>
                <View style={{flexDirection: 'row', height: 100, padding: 20}}>
                    <Image
                        style={{}}
                        source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
                    />
                </View>
                <View>
                    <DatePickerIOS
                        date={this.state.date}
                        mode="datetime"
                        timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                        onDateChange={this.onDateChange.bind(this)}
                        minuteInterval={15}
                    />
                    <DatePickerIOS
                        date={this.state.date}
                        mode="date"
                        timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                        onDateChange={this.onDateChange.bind(this)}
                        minimumDate={new Date('1971-01-01')}
                    />
                    <DatePickerIOS
                        date={this.state.date}
                        mode="time"
                        timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                        onDateChange={this.onDateChange.bind(this)}
                        minuteInterval={10}
                    />
                </View>

            </View>
        )
    }
}


var styles = StyleSheet.create({
    textinput: {
        height: 26,
        width: 50,
        borderWidth: 0.5,
        borderColor: '#0f0f0f',
        padding: 4,
        fontSize: 13,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
    },
    labelView: {
        marginRight: 10,
        paddingVertical: 2,
    },
    label: {
        fontWeight: '500',
    },
    headingContainer: {
        padding: 4,
        backgroundColor: '#f6f7f8',
    },
    heading: {
        fontWeight: '500',
        fontSize: 14,
    },
});