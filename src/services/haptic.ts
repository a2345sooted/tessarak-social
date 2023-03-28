import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

export function triggerImpactLight() {
  ReactNativeHapticFeedback.trigger('impactLight');
}

export function triggerImpactMedium() {
  ReactNativeHapticFeedback.trigger('impactMedium');
}

export function triggerImpactHeavy() {
  ReactNativeHapticFeedback.trigger('impactHeavy');
}
