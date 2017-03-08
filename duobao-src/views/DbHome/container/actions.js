/**
 * Created by cjy on 16/11/23.
 */

function _setWebView(url) {
    return {
        type: 'WEBVIEW',
        url
    }
}

export const setWebView = url => dispatch => dispatch(_setWebView(url));