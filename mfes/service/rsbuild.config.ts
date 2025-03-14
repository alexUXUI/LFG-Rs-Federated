import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3002,
  },
  dev: {
    assetPrefix: true,
  },
  output: {
    assetPrefix: '',
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'service',
          exposes: {
            './Service': './src/app.tsx',
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: '^18.3.1',
            },
            'react-dom': {
              singleton: true,
            },
            // '@tanstack/react-router': {
            //   singleton: true,
            //   requiredVersion: '^1.62.1',
            // },
          },
        }),
      ]);
    },
  },
});
