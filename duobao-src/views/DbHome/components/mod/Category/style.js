/**
 * Created by cjy on 16/11/23.
 */

export default (vars = {}, commonStyle = {}) => {

    const cat = {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: vars.vars.gray,
    };

    const text = {
        fontSize: 14,
        color: '#999',
        paddingTop: 10,
        paddingBottom: 10,
    };

    return {
        ...commonStyle,
        category: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        active: {
            ...cat,
            borderBottomWidth: 1,
            borderColor: vars.vars.primary
        },
        cat,
        text,
        active_text: {
            ...text,
            color: vars.vars.primary,
        }
    }
}