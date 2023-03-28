import {tkDelay} from '../utils';
import { getStorageItem, removeStorageItem, setStorageItem } from './storage';

const AUTH_DETAILS_STORAGE_KEY = '@auth::details';
const AUTH_STAKE_STORAGE_KEY = '@auth::stake';

export async function sendCodeToPhone(phoneNumber: string): Promise<void> {
  await tkDelay(2000);
  // throw new Error('test error');
}

export async function verifyCodeForPhone(phoneNumber: string, code: string): Promise<void> {
  await tkDelay(2000);
  throw new Error('test error');
}

export async function isSignedIn(): Promise<boolean> {
  const detailsJSON = await getStorageItem(AUTH_DETAILS_STORAGE_KEY);
  if (!detailsJSON) {
    return false;
  }
  let details: any;
  try {
    details = JSON.parse(detailsJSON);
    // validate details
    return true;
  } catch (error: any) {
    // todo what to do about this error?
    return false;
  }
}

export async function appIsStaked(): Promise<boolean> {
  const stake = await getStorageItem(AUTH_STAKE_STORAGE_KEY);
  return !!stake;
}

export async function stakeApp(): Promise<void> {
  await setStorageItem(AUTH_STAKE_STORAGE_KEY, 'true');
}

export async function removeStake(): Promise<void> {
  await removeStorageItem(AUTH_STAKE_STORAGE_KEY);
}
