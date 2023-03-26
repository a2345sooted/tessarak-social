import {Colors} from 'react-native/Libraries/NewAppScreen';

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
