import {Colors} from 'react-native/Libraries/NewAppScreen';
import {DefaultTheme as DefaultPaperTheme} from 'react-native-paper';
import {DefaultTheme as DefaultNavTheme} from '@react-navigation/native';

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
  ...DefaultPaperTheme,
  roundness: 1,
  colors: {
    ...DefaultPaperTheme.colors,
    primary: DarkAppColors.tessarak,
    accent: DarkAppColors.highlight,
  },
};

export const NAV_THEME = DefaultNavTheme;
