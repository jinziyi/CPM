/**
 * Created by cjy on 16/11/23.
 */
import {StyleSheet} from 'react-native';
import baseStyle, {vars, fns} from '../../style';

export const styleCreator = ({baseStyle, vars, fns}) => {
    const height = 40,
        marginTop = 30;
    return {
        container: {
            flex: 1,
            ...baseStyle.center,
            backgroundColor: '#F5FCFF',
        }
        ,
        inputBox: {
            marginTop,
            ...fns.border(vars.px, 'solid'),
            ...fns.padding(5, 10),
            height,
            width: vars.width * 2 / 3,
            borderRadius: 5,
            alignSelf: 'center',
        }
        ,
        input: {
            flex: 1,
        }
        ,
        welcome: {
            fontSize: 20,
            textAlign: 'center',
        }
        ,
        button: {
            marginTop,
            height,
            width: vars.width * 2 / 3,
            ...fns.padding(10, 20),
            ...fns.flex(),
        }
    }
};

export default StyleSheet.create(styleCreator({baseStyle, vars, fns}));