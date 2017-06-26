import {createReducer} from '../utils';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ONCHANGE_LOGIN_PASSWORD = 'ONCHANGE_LOGIN_PASSWORD';

export const actions = {
    login: data => dispatch => dispatch({
        type: LOGIN,
        data
    }),
    logout:data => dispatch => dispatch({
        type: LOGOUT,
        data
    }),
    onChangePassword: data => dispatch => dispatch({
        type: ONCHANGE_LOGIN_PASSWORD,
        value: data
    })
};


const initialState = {isLoggedIn: false};

const reducers = {
    [LOGIN]: state => {
        return {...state, isLoggedIn: true}
    },
    [LOGOUT]: state => ({...state, isLoggedIn: false, value: ''}),
    [ONCHANGE_LOGIN_PASSWORD]: (state, {value}) => ({...state, value})
};

export default createReducer(initialState, reducers);
