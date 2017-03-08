/**
 * Created by cjy on 16/11/23.
 */

import logic from './logic';
import Component from './mod';
import Duobao from '../../WebView';
import doAjax from '../../../utils/doAjax';

export default logic(Component)(Duobao.component, doAjax());