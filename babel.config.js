module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-paper/babel',
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        envName: 'tessarak_local_dev',
        moduleName: '@env',
        path: '.env.local',
        allowUndefined: false,
        safe: true,
        allowlist: ['HTTP_PROTOCOL', 'WS_PROTOCOL', 'API_ORIGIN'],
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          '@common': './src/common/index',
          '@app-ctx': './src/AppContext',
        },
      },
    ],
  ],
};
