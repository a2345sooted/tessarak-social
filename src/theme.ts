import {Colors} from 'react-native/Libraries/NewAppScreen';
import {DefaultTheme} from 'react-native-paper';

export type AppColors = {
  tessarak: string;
  highlight: string;
  text: string;
  bg1: string;
};

export const LightAppColors: AppColors = {
  tessarak: '#029aa8',
  highlight: '#fc8b0b',
  text: Colors.darker,
  bg1: Colors.lighter,
};

export const DarkAppColors: AppColors = {
  tessarak: '#029aa8',
  highlight: '#fc8b0b',
  text: Colors.lighter,
  bg1: Colors.darker,
};

export const PAPER_THEME = {
  ...DefaultTheme,
  roundness: 1,
  colors: {
    ...DefaultTheme.colors,
    primary: DarkAppColors.tessarak,
    accent: DarkAppColors.highlight,
  },
};
