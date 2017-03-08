/**
 * Created by cjy on 16/11/23.
 */
export const vars = {
    primary: '#ff8b0b',
    success: '#0f0',
    error: '#f00',
    warning: '#ff0',
    gray: '#ccc'
};

export const fns = {
    flex: (direction = 'column', wrap = 'wrap', justifyContent, alignItems) => {
        return {
            justifyContent,
            flexWrap: wrap,
            flexDirection: direction,
            alignItems
        }
    },
    fontSize: fs => ({fontSize: fs}),
    padding: direction => size => {
        return {
            ['padding' + direction]: size
        }
    }
};

export default {
    vars,
    fns,
}