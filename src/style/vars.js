/**
 * Created by cjy on 16/11/23.
 */

import {
    Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

export const vars = {
    primary: '#DB2013',
    success: '#0f0',
    error: '#f00',
    warning: '#ff0',
    gray: '#ccc',
    width,
    height,
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
    icon: (fontSize) => {
        return {
            fontFamily: 'fontawesome',
            fontSize
        }
    }
};

export default {
    vars,
    fns,
}