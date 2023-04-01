import {Camera, CameraPermissionStatus} from 'react-native-vision-camera';

export function hasAccess(status: CameraPermissionStatus): boolean {
  return status === 'authorized';
}

export async function getCameraPermissionStatus(): Promise<CameraPermissionStatus> {
  return Camera.getCameraPermissionStatus();
}

export async function getMicrophonePermissionStatus(): Promise<CameraPermissionStatus> {
  return Camera.getMicrophonePermissionStatus();
}

export async function requestCameraAccess(): Promise<CameraPermissionStatus> {
  const status = await getCameraPermissionStatus();
  return status === 'authorized' ? status : Camera.requestCameraPermission();
}

export async function requestMicAccess(): Promise<CameraPermissionStatus> {
  const status = await getMicrophonePermissionStatus();
  if (status === 'authorized') {
    return status;
  } else {
    return Camera.requestMicrophonePermission();
  }
}
