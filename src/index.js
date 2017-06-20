/**
 * Created by cjy on 16/11/23.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers} from 'react-navigation';
import {navigateAction} from './redux/utils';
import {AppNavigator} from './navigators';

const AppWithNavigationState = ({ dispatch, nav, navigateAction }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav, navigateAction})} />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
    navigateAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

const mapDispatchToProps = dispatch => ({
    navigateAction: (routeName) => dispatch(navigateAction(routeName)),
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);