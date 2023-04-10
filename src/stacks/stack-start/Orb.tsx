import React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

function Orb() {
  return <Animated.View style={styles.circle} />;
  // const animation = useSharedValue(0);
  // useEffect(() => {
  //   animation.value = withDelay(
  //     Animated.delay,
  //     withRepeat(
  //       withTiming(1, {
  //         duration: 2000,
  //         easing: Easing.linear,
  //       }),
  //       repeat ? -1 : 1,
  //       false,
  //     ),
  //   );
  // }, []);
  // const animatedStyles = useAnimatedStyle(() => {
  //   const opacity = interpolate(
  //     animation.value,
  //     [0, 1],
  //     [0.6, 0],
  //     Extrapolate.CLAMP,
  //   );
  //   return {
  //     opacity: opacity,
  //     transform: [{scale: animation.value}],
  //   };
  // });
  // return <Animated.View style={[styles.circle, animatedStyles]} />;
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    borderRadius: 25,
    height: 50,
    borderColor: '#e91e63',
    borderWidth: 4,
    backgroundColor: '#ff6090',
  },
});

export default Orb;
