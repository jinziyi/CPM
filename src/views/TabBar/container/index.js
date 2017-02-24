/**
 * Created by cjy on 16/11/23.
 */

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Component from '../components';
import * as actions from './actions';

function mapStateToProps(state, ownProps) {
    return {
        count: state.homeCount.step
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, actions), dispatch)

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)