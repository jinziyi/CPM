import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from '../../components/Icon';

import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

const MainScreen = (props) => (
    <View style={styles.container}>
        <LoginStatusMessage/>
        <AuthButton/>
    </View>
);

MainScreen.navigationOptions = {
    title: 'Home Screen',
    tabBarIcon: ({tintColor}) => <Icon i='home' tintColor={tintColor}/>
};

export default MainScreen;
