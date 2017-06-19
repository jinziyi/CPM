import {createReducer} from '../utils';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export const actions = {
    login: data => dispatch => dispatch({
        type: LOGIN,
        data
    }),
    logout:data => dispatch => dispatch({
        type: LOGOUT,
        data
    })
};


const initialState = {isLoggedIn: false};

const reducers = {
    [LOGIN]: state => {
        return {...state, isLoggedIn: true}
    },
    [LOGOUT]: state => ({...state, isLoggedIn: false}),
};

export default createReducer(initialState, reducers);
