import React, { useEffect, useLayoutEffect } from 'react';
import { render } from 'react-dom';
import { createInertiaApp, Head } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import { theme } from './theme';
import './locales';
import { CacheProvider } from '@emotion/react';
import createCache from "@emotion/cache";
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { selectedDirection } from './store/slices/langSlice';
import { prefixer } from 'stylis';
import stylisRTLPlugin from 'stylis-plugin-rtl';

InertiaProgress.init({ color: '#d61c9e' });

const cacheLtr = createCache({ key: 'muiltr' });
const cacheRtl = createCache({ key: 'muirtl', stylisPlugins: [prefixer, stylisRTLPlugin] });

const RootWrapper = ({ children }) => {

    const direction = useSelector(selectedDirection);

    useLayoutEffect(() => {
        document.body.setAttribute('dir', direction);
    }, [direction]);

  return (
    <CacheProvider value={direction === 'rtl' ? cacheRtl : cacheLtr}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

createInertiaApp({
    title: title => `${title} - shopinative`,
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
            <RootWrapper>
                <App {...props} />
            </RootWrapper>
        </Provider>,
        el
        );
    },
});
