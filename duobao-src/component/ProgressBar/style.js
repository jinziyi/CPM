/**
 * Created by cjy on 16/11/23.
 */

export default (width, height, value, color, backgroundColor) => {
    return {root: {
        width,
        flexDirection: 'row',
        height,
        backgroundColor
    },
    bar: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: value * width / 100,
        height,
        backgroundColor: color
    }
}
}
