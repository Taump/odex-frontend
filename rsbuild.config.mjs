import { createRequire } from 'node:module';

import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginNodePolyfill } from '@rsbuild/plugin-node-polyfill';
import { pluginReact } from '@rsbuild/plugin-react';

const require = createRequire(import.meta.url);

// Same env contract as CRA: `.env`, `.env.local`, `.env.<NODE_ENV>` and
// `.env.<NODE_ENV>.local`, with only REACT_APP_* reaching the bundle. In
// production these values are usually absent and `window.env` from the
// nginx-generated public/env.js takes over, see src/config/environment.js.
const { publicVars } = loadEnv({ prefixes: ['REACT_APP_'] });

export default defineConfig({
  plugins: [
    // SWC cannot parse Flow, and 179 files under src/ are annotated with it, so
    // Babel strips the types first. JSX is only *parsed* here (syntax plugin)
    // and left for SWC to transform.
    pluginBabel({
      include: /\.jsx?$/,
      exclude: /[\\/]node_modules[\\/]/,
      babelLoaderOptions: {
        // .babelrc is a Babel 6 config kept around for Storybook and Jest
        babelrc: false,
        configFile: false,
        presets: [require.resolve('@babel/preset-flow')],
        plugins: [require.resolve('@babel/plugin-syntax-jsx')],
      },
    }),
    // React 16.13 has no react/jsx-runtime (it landed in 16.14), so keep the
    // classic JSX transform CRA used. Every file already imports React.
    pluginReact({ swcReactOptions: { runtime: 'classic' } }),
    // webpack 3 shimmed node core modules automatically; Rspack does not, and
    // bitcore-mnemonic/bitcore-lib need Buffer, crypto and stream.
    pluginNodePolyfill(),
  ],
  source: {
    entry: { index: './src/index.js' },
    define: publicVars,
  },
  html: {
    template: './template.html',
  },
  output: {
    // keep the CRA output directory so Dockerfile and nginx.conf stay valid
    distPath: { root: 'build' },
  },
  server: {
    port: 3000,
    proxy: {
      '/rates': {
        target: 'https://min-api.cryptocompare.com',
        pathRewrite: { '^/rates': '' },
        changeOrigin: true,
      },
    },
  },
});
