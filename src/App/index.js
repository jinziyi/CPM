/**
 * Created by cjy on 16/11/23.
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import Login from '../views/LoginScreen/index';
import Main from '../navigators';

export const App = props => <View style={{flex: 1}}>{props.isLogin ? <Main/> : <Login/>}</View>;

const mapStateToProps = (state, props) => ({
    isLogin: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(App);
