module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-paper/babel',
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        envName: 'local',
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
          '@api': './src/services/api',
          '@auth': './src/services/auth',
          '@haptic': './src/services/haptic',
          '@permissions': './src/services/permissions',
          '@storage': './src/services/storage',
          '@mock-data': './src/services/mock-data',
          '@app-ctx': './src/AppContext',
          '@utils': './src/utils',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
