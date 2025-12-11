import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-themes'
  ],
  framework: '@storybook/react-vite',
  async viteFinal(config) {
    // Ensure path aliases are configured
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(dirname, '../src'),
      '@components': path.resolve(dirname, '../src/components'),
      '@stories': path.resolve(dirname, '../src/stories'),
      '@themes': path.resolve(dirname, '../src/themes'),
    };
    return config;
  },
};
export default config;
