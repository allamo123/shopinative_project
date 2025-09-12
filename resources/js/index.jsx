import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { Provider } from 'react-redux';
import store from './store';
import './locales';

InertiaProgress.init({ color: '#d61c9e' });

createInertiaApp({

    resolve: async (name) => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });

        const path = `./Pages/${name.replace(/\./g, '/')}`;

        let page = pages[`${path}.jsx`];

        if (!page) {
          page = pages[`${path}/index.jsx`];
        }

        if (!page) {
          console.error(`Inertia page not found: ${name}`);
          throw new Error(`Inertia page not found: ${name}`);
        }

        return page.default;
    },
    setup({ el, App, props }) {
        render(
        <Provider store={store}>
            <App {...props} />
        </Provider>,
        el
        );
    },
});
