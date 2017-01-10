import React from 'react';
import {Provider} from 'react-redux';
import RootRoute from './route';
import store from './redux';

export default function Root() {
    return () => {
        return (
            <Provider store={store}>
                <RootRoute/>
            </Provider>
        );
    };
};