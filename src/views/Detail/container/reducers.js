/**
 * Created by cjy on 16/11/23.
 */

const reducers = {
    homeCount(state = {step: 0}, action){
        let {type, step} = action;
        switch (type){
            case 'ADD':
                return Object.assign({}, state, {step: state.step + step});
            case 'REDUCE':
                return Object.assign({}, state, {step: state.step - step});
            default:
                return state;
        }
    }
};

export default reducers;