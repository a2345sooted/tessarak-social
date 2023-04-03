import {BrightnessMode} from '@app-ctx';
import {ColorSchemeName} from 'react-native';
import {formatWithMask, Masks} from 'react-native-mask-input';

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

export function maskPhoneNumber(text: string): string {
  const {masked} = formatWithMask({
    text,
    mask: Masks.USA_PHONE,
  });
  return masked;
}

export function getAspectRatio(
  width: number | undefined,
  height: number | undefined,
): number {
  if (!width || !height) {
    return 1;
  }
  return width / height;
}
