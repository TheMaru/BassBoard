const {
  createConfig,
  getDependencies
} = require('eslint-config-galex/src/createConfig');
const {
  createReactOverride
} = require('eslint-config-galex/src/overrides/react');
const {
  createTSOverride
} = require('eslint-config-galex/src/overrides/typescript');

const deps = getDependencies();

const customReactOverride = createReactOverride({
  ...deps,
  rules: {
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ]
  }
});

const storiesOverride = createReactOverride({
  ...deps,
  files: ['**/*.stories.*'],
  rules: {
    'import/no-anonymous-default-export': 'off'
  }
});

const pagesOverride = createReactOverride({
  ...deps,
  files: ['pages/*'],
  rules: {
    'import/no-default-export': 'off',
    'import/no-anonymous-default-export': 'off'
  }
});

module.exports = createConfig({
  overrides: [
    storiesOverride,
    pagesOverride,
    customReactOverride,
    createTSOverride(deps)
  ],
  settings: {
    'import/core-modules': ['styled-jsx/css']
  }
});
