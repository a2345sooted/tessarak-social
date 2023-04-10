import React, {useContext} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {useNavigation} from '@react-navigation/native';
import {SafeScreen} from '@common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {FadeIn} from 'react-native-reanimated';
import {triggerImpactMedium} from '@haptic';
// import Orb from './Orb';

const IntroScreenOne = () => {
  const {colors, staked} = useContext(AppContext);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <SafeScreen>
      <Animated.View
        style={{flex: 1, paddingHorizontal: 30}}
        entering={FadeIn.duration(600)}>
        <View
          style={{
            paddingTop: 100,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            variant="titleLarge"
            style={{fontWeight: 'bold', color: '#c66ef1'}}>
            Tessarak
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 40,
          }}>
          <Text
            variant="titleLarge"
            style={{
              fontWeight: 'bold',
              color: colors.text,
            }}>
            This is your orb
          </Text>
        </View>
        <View style={{flex: 1}} />
        <View style={{paddingHorizontal: 12, marginTop: 50}}>
        </View>
        <View style={{paddingBottom: 20 + insets.bottom}}>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              variant="titleSmall"
              style={{
                fontWeight: 'bold',
                color: colors.text,
              }}>
              The Tessarak Foundation, 2023
            </Text>
          </View>
          <Text
            variant="bodySmall"
            style={{
              color: '#c66ef1',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Version 1.0.4
          </Text>
        </View>
      </Animated.View>
    </SafeScreen>
  );
};

export default IntroScreenOne;
