module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          containers: './src/containers',
          config: './src/config',
          contexts: './src/contexts',
          hooks: './src/hooks',
          store: './src/store',
          styles: './src/styles',
          util: './src/util',
        },
        extensions: ['.js', '.ios.js', '.android.js', '.json'],
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console', 'react-native-paper/babel'],
    },
  },
  retainLines: true,
}
