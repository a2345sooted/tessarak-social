import {createContext} from 'react';
import {ColorSchemeName} from 'react-native';

export type BrightnessMode = 'device' | 'light' | 'dark';

export type AppContextContainer = {
  appBrightMode: BrightnessMode;
  deviceBrightMode: ColorSchemeName;
  updateBrightMode: (mode: BrightnessMode) => void;
  colors: any;
};

export const AppContext = createContext<AppContextContainer>({
  appBrightMode: undefined as any,
  deviceBrightMode: undefined as any,
  updateBrightMode: undefined as any,
  colors: undefined as any,
});
