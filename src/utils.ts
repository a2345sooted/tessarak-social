import {BrightnessMode} from '@app-ctx';
import {ColorSchemeName} from 'react-native';

// todo what about undefined values for colorScheme?
export function isDarkMode(
  mode: BrightnessMode,
  colorScheme: ColorSchemeName,
): boolean {
  return mode === 'dark' || (mode === 'device' && colorScheme === 'dark');
}

export async function tkDelay(millis: number): Promise<void> {
  return new Promise(resolve => setTimeout(() => resolve(), millis));
}
