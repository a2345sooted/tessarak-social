import {Colors} from 'react-native/Libraries/NewAppScreen';

export type AppColors = {
  tessarak: string;
  text: string;
  bg1: string;
};

export const LightAppColors: AppColors = {
  tessarak: '#029aa8',
  text: Colors.darker,
  bg1: Colors.lighter,
};

export const DarkAppColors: AppColors = {
  tessarak: '#029aa8',
  text: Colors.lighter,
  bg1: Colors.darker,
};
