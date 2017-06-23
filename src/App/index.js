/**
 * Created by cjy on 16/11/23.
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import Login from '../views/LoginScreen';
import Main from '../navigators';

export const App = props => {
    const {isLogin} = props;
    return (
        <View style={{flex: 1}}>
            {isLogin ? <Main/> : <Login/>}
        </View>
    )
};

const mapStateToProps = (state, props) => ({
    isLogin: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(App);
