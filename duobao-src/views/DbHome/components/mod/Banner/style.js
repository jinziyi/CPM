/**
 * Created by cjy on 16/11/23.
 */

export default (vars = {}, commonStyle = {}) => {
    return {
        ...commonStyle,
        banner: {
        },
        pagination: {
            bottom: 8,
        },
        box: {
            flexDirection: 'row',
            flex: 1,
            height: 20
        },
        img: {
            flex: 1,
            flexDirection: 'row',
        }
    }
}