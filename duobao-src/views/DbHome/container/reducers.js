/**
 * Created by cjy on 16/11/23.
 */

const reducers = {
    webView(state = {url: 'http://1.weibo.com'}, action){
        const {type, url = ''} = action;
        const _url = url.toString().trim();
        switch (type) {
            case 'WEBVIEW':
                return Object.assign({}, state, {url: _url.indexOf('/') == 0 ? 'http://1.weibo.com' + _url : _url});
            default:
                return state;
        }
    }
};

export default reducers;