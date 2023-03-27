import {tkDelay} from '../utils';

export async function sendCodeToPhone(phoneNumber: string): Promise<void> {
  await tkDelay(2000);
}

export async function verifyCodeForPhone(phoneNumber: string, code: string): Promise<void> {
  await tkDelay(2000);
}
