/**
 * Created by cjy on 16/11/23.
 */

import {connect} from 'react-redux';
import Component from '../components';
import * as actions from './actions';

const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = {
    ...actions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)