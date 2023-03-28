import {getStorageItem, removeStorageItem, setStorageItem} from './storage';

const AUTH_DETAILS_STORAGE_KEY = '@auth::details';
const AUTH_STAKE_STORAGE_KEY = '@auth::stake';

export interface AuthSuccessResponse {
  access_token: string;
  refresh_token: string;
  id_token: string;
  scope: string;
  expires_in: number;
  token_type: string;
}

export interface AuthDetails extends AuthSuccessResponse {
  expiration: number;
}

function deriveExpiration(expInterval: number): number {
  const now = Date.now() / 1000;
  return now + expInterval;
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

export async function getAuthDetails(): Promise<AuthDetails | null> {
  const json = await getStorageItem(AUTH_DETAILS_STORAGE_KEY);
  if (!json) {
    return null;
  }
  try {
    return JSON.parse(json);
  } catch (error: any) {
    // todo send this error to api?
    return null;
  }
}

export async function handleAuthSuccess(data: AuthSuccessResponse) {
  if (!data) {
    throw new Error('missing data');
  }
  if (!data.access_token) {
    throw new Error('missing access_token');
  }
  if (!data.id_token) {
    throw new Error('missing id_token');
  }
  if (!data.refresh_token) {
    throw new Error('missing refresh_token');
  }
  if (!data.expires_in) {
    throw new Error('missing expires_in');
  }
  if (data.token_type !== 'Bearer') {
    throw new Error(`invalid token type: ${data.token_type}`);
  }
  const expiration = deriveExpiration(data.expires_in);
  const authDetails: AuthDetails = {...data, expiration};
  await setStorageItem(AUTH_DETAILS_STORAGE_KEY, JSON.stringify(authDetails));
}

export async function getActiveAuth(): Promise<AuthDetails | null> {
  const auth = await getAuthDetails();
  if (!auth) {
    return null;
  }
  const isExpired = !(auth.expiration >= Date.now() / 1000);
  if (isExpired) {
    await clearAuth();
    return null;
  }
  return auth;
}

export async function getAccessToken(): Promise<string | null | undefined> {
  const auth = await getAuthDetails();
  return auth?.access_token;
}

export async function clearAuth(): Promise<void> {
  await removeStorageItem(AUTH_DETAILS_STORAGE_KEY);
}
