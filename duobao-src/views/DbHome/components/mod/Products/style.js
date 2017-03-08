/**
 * Created by cjy on 16/11/23.
 */

export default (vars = {}, commonStyle = {}) => {
    return {
        ...commonStyle,
        products: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
        },
    }
}

export const ProductStyle = (vars = {}, commonStyle = {}, windowStyle) => {
    const width = windowStyle.width * 0.5
    return {
        ...commonStyle,
        product: {
            width,
            height: 250,
            padding: 15,

        },
        container: {
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        },
        imgBox: {
            padding: 10,
            width,
            // height: 150,
            flex: 1,
            justifyContent: 'center',
            alignSelf: 'center'
        },
        titleBox: {
            paddingTop: 10,
            paddingBottom: 10,
        },
        title: {
            fontSize: 14
        },
        img: {
            flex: 1
        },
        infoBox: {
            flexDirection: 'row'
        },
        progress: {
            flex: 3
        },
        btn: {
            flex: 2,
            borderWidth: 1,
            borderColor: vars.vars.primary,
            ...commonStyle.center,
            padding: 0,
        },
        btn_text: {
            color: vars.vars.primary,
            fontSize: 12
        }

    }
};