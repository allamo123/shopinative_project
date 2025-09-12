import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/inertia-react'
import createServer from '@inertiajs/server'

const context = require.context("../../Modules", true, /Pages\/(.+)\.js$/);

createServer((page) => createInertiaApp({
  page,
  render: ReactDOMServer.renderToStaticNodeStream,
  resolve: (name) => {

    let part = name.toString().split('::');
    context(`./${part[0]}/resources/assets/js/Pages/${part[1]}.js`)
    .then(module => module.default);
  },

  setup: ({ App, props }) => <App {...props} />,
}))
