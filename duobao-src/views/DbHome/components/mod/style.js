/**
 * Created by cjy on 16/11/23.
 */

export default (vars = {}, commonStyle = {}) => {
    return {
        ...commonStyle,
        container: {
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'stretch'
        },
        main: {
        },
        footer: {
            flexDirection: 'row'
        }
    }
}