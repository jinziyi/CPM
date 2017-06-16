import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from '../components/Icon';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

const ProfileScreen = (props) => (
    <View style={styles.container}>
        <Text style={styles.welcome}>
            {JSON.stringify(props.navigation.state)}
            Profile Screen
        </Text>
    </View>
);

ProfileScreen.navigationOptions = {
    title: 'Profile',
    tabBarIcon: ({tintColor}) => <Icon i='gear' tintColor={tintColor}/>
};

export default ProfileScreen;
