'use strict';

import React from 'react';
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader';
import App from './components/app';

require('../assets/stylesheets/style.scss');

const render = Component => {
    if (process.env.NODE_ENV === 'development') {
        ReactDOM.render(
            <AppContainer>
                <HashRouter>
                    <App />
                </HashRouter>
            </AppContainer>, document.getElementById('app')
        );
    } else if (process.env.NODE_ENV === 'production') {
        console.log('running in prod');
        const runtime = require('serviceworker-webpack-plugin/lib/runtime');
        if ('serviceWorker' in navigator) {
            const registration = runtime.register();
        }
        ReactDOM.render(
            <HashRouter>
                <App />
            </HashRouter>, document.getElementById('app')
        );
    }
}

render(App);

if (module.hot) {
    module.hot.accept();
}
