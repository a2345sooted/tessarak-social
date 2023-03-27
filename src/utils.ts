import {BrightnessMode} from '@app-ctx';
import {ColorSchemeName} from 'react-native';

// todo what about undefined values for colorScheme?
export function isDarkMode(
  mode: BrightnessMode,
  colorScheme: ColorSchemeName,
): boolean {
  return mode === 'dark' || (mode === 'device' && colorScheme === 'dark');
}
