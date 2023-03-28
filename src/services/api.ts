import {tkDelay} from '../utils';
import {API_ORIGIN, HTTP_PROTOCOL} from '@env';
import axios from 'axios';
import {AuthSuccessResponse, getAccessToken, handleAuthSuccess} from './auth';

const API = `${HTTP_PROTOCOL}://${API_ORIGIN}`;

export type TessarakUser = {
  sub: string;
  phone: string;
};

export async function checkConnection(): Promise<any> {
  const response = await axios.get(API);
  return response.data;
}

export async function sendCodeToPhone(phone: string): Promise<void> {
  await tkDelay(1500);
  try {
    await axios.post(`${API}/v1/auth/send`, {phone});
  } catch (error: any) {
    // todo what to do with error?
    throw error;
  }
}

export async function verifyCodeForPhone(
  phone: string,
  code: string,
): Promise<void> {
  await tkDelay(1500);
  try {
    const response = await axios.post(`${API}/v1/auth/verify`, {
      phone,
      code,
    });
    await handleAuthSuccess(response.data as AuthSuccessResponse);
  } catch (error: any) {
    // todo what to do with error?
    throw error;
  }
}

export async function getTessarakUser(): Promise<TessarakUser> {
  const token = await getAccessToken();
  const response = await axios.get(`${API}/v1/`, {
    headers: {Authorization: `Bearer ${token}`},
  });
  return response.data as TessarakUser;
}

export async function deleteUser(): Promise<void> {
  const token = await getAccessToken();
  await axios.delete(`${API}/v1/`, {
    headers: {Authorization: `Bearer ${token}`},
  });
  await tkDelay(3000);
}

export async function refreshCreds(): Promise<void> {
  // try {
  //   const rToken = await getRefreshToken();
  //   if (!rToken) {
  //     // todo log something ?
  //     return false;
  //   }
  //   const response = await axios.post(`${API}/v1/auth/refresh`, {
  //     token: rToken,
  //   });
  //   const data = response.data;
  //   await handleAuthSuccess(data);
  //   return true;
  // } catch (error: any) {
  //   return false;
  // }
}
