import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setStorageItem(key: string, value: string) {
  return AsyncStorage.setItem(key, value);
}

export async function getStorageItem(key: string): Promise<string | null> {
  try {
    return AsyncStorage.getItem(key);
  } catch (error: any) {
    // todo what to do about this error?
    return null;
  }
}

export async function removeStorageItem(key: string) {
  return AsyncStorage.removeItem(key);
}
