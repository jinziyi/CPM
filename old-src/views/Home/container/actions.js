/**
 * Created by cjy on 16/11/23.
 */

export function add(step) {
    return {
        type: 'ADD',
        step
    }
}
export function reduce(step) {
    return {
        type: 'REDUCE',
        step
    }
}