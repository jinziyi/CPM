/**
 * Created by cjy on 16/11/23.
 */

export default (vars = {}, commonStyle = {}) => {
    return {
        ...commonStyle,
        announce: {
            borderBottomWidth: 1,
            borderColor: '#eee',
        },
        notice: {
            paddingLeft: 5,
            paddingRight: 5,
            padding: 5,
            flex: 1
        }
    }
}