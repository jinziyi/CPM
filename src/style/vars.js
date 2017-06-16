/**
 * Created by cjy on 16/11/23.
 */

import {
    Dimensions,
    PixelRatio,
} from 'react-native';

const {height, width} = Dimensions.get('window');

export const vars = {
    primary: '#5d77ee',
    success: '#0f0',
    error: '#f00',
    warning: '#ff0',
    gray: '#ccc',
    width,
    height,
    px: 1 / PixelRatio.get()
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
    padding: (pt = 10, pr = pt, pb = pt, pl = pr) => {
        return {
            paddingTop: pt,
            paddingRight: pr,
            paddingBottom: pb,
            paddingLeft: pl,
        }
    },
    margin: (mt = 10, mr = mt, mb = mt, ml = mr) => {
        return {
            marginTop: mt,
            marginRight: mr,
            marginBottom: mb,
            marginLeft: ml,
        }
    },
    icon: (fontSize, color = vars.primary) => {
        return {
            fontFamily: 'fontawesome',
            fontSize,
            color
        }
    }
};

export default {
    vars,
    fns,
}