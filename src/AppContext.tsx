import {createContext} from 'react';
import {ColorSchemeName} from 'react-native';
import { TessarakUser } from './services/api';

export type BrightnessMode = 'device' | 'light' | 'dark';

export type AppContextContainer = {
  appBrightMode: BrightnessMode;
  deviceBrightMode: ColorSchemeName;
  updateBrightMode: (mode: BrightnessMode) => void;
  colors: any;
  statusBar: JSX.Element;
  staked: boolean;
  user: TessarakUser | null;
  checkAuth: () => void;
};

export const AppContext = createContext<AppContextContainer>({
  appBrightMode: undefined as any,
  deviceBrightMode: undefined as any,
  updateBrightMode: undefined as any,
  colors: undefined as any,
  statusBar: undefined as any,
  staked: undefined as any,
  user: undefined as any,
  checkAuth: undefined as any,
});
