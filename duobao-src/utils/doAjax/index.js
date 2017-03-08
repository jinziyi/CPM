/**
 * Created by cjy on 16/11/23.
 */

import config from './config';

export default (type) => {
    const xhr = () => {
        console.error('xhr尚未配置')
    };
    const _fetch = (url, params = {}) => {
        return fetch(url, {
            ...config.fetch,
            ...params,
            headers: {
                ...config.fetch.headers,
                ...(params.headers || {})
            }
        })
    };
    return {
        xhr,
        fetch: _fetch,
        [undefined]: _fetch
    }[type]
}