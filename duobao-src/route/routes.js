/**
 * Created by cjy on 16/11/23.
 */

import React, {Component} from 'react';
import DbHome from '../views/DbHome';
import WebView from '../views/WebView';

const routes = [
    DbHome,
    WebView,
];

const indexRoute = routes.find(route => route.indexRoute === true) || routes[0];

export class Routes extends Component {
    render() {
        const props = this.props;
        const IndexComponent = indexRoute.component;
        return <IndexComponent {...props} route={this.route(props, this.getData('routes')())}/>
    }

    getData(type) {
        return {
            'routes': () => routes,
        }[type]
    }

    route(props, routes) {
        return {
            goto: (key) => {
                props.navigator.push(routes.find(route => route.key == key));
            }
        }
    }
}

export default {
    ...indexRoute,
    component: Routes
}

