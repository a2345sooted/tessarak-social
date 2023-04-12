import React, {useContext, useState} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {useNavigation} from '@react-navigation/native';
import {SafeScreen} from '@common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
    FadeIn,
    FadeInDown, FadeInRight,
    FadeOut,
    FadeOutDown, FadeOutRight,
} from 'react-native-reanimated';
import {triggerImpactMedium} from '@haptic';

const LandingScreen = () => {
  const {colors, staked} = useContext(AppContext);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [agreed, setAgreed] = useState(false);

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
            variant="displayLarge"
            style={{fontWeight: 'bold', color: colors.text}}>
            Tessarak
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 40,
            marginTop: -10,
          }}>
          <Text
            variant="titleMedium"
            style={{
              fontWeight: 'bold',
              color: colors.text,
            }}>
            choose your dimensions
          </Text>
        </View>
        <View style={{marginTop: 15, paddingHorizontal: 10}}>
          <Animated.View
            entering={FadeIn.duration(1000)}
            exiting={FadeOut.duration(600)}>
            <Text
              variant="titleSmall"
              style={{
                fontWeight: 'bold',
                color: colors.text,
                marginBottom: 12,
              }}>
              You must agree to the Tessarak terms of service to enter.
            </Text>
            <Text
              variant="titleSmall"
              style={{
                fontWeight: 'bold',
                color: colors.text,
                marginBottom: 12,
              }}>
              Don't worry, they're short and easy to understand.
            </Text>
            <Button
              icon={agreed ? 'check-circle-outline' : 'circle-outline'}
              uppercase
              labelStyle={{color: colors.text, fontWeight: '800'}}
              buttonColor={colors.tessarak}
              theme={{roundness: 1}}
              onPress={() => {
                // //@ts-ignore
                // navigation.navigate('IntroScreen');
                // triggerImpactMedium();
                setAgreed(!agreed);
              }}>
              Terms of Service
            </Button>
          </Animated.View>
          {agreed && (
            <Animated.View
                style={{marginTop: 20}}
              entering={FadeInRight.duration(600)}
              exiting={FadeOutRight.duration(600)}>
              <Button
                uppercase
                icon="arrow-right"
                labelStyle={{color: colors.text, fontWeight: '800'}}
                buttonColor={colors.bizarroTessarak}
                theme={{roundness: 1}}
                onPress={() => {
                  //@ts-ignore
                  navigation.navigate('IntroScreen');
                  triggerImpactMedium();
                }}>
                Enter
              </Button>
            </Animated.View>
          )}
        </View>
        <View style={{flex: 1}} />
        <View style={{marginBottom: 50, paddingHorizontal: 10}}>
          <Text
            variant="titleMedium"
            style={{
              fontWeight: 'bold',
              color: colors.text,
              // marginBottom: 8,
              textAlign: 'center',
            }}>
            Already setup?
          </Text>
          <Button
            mode="text"
            uppercase
            labelStyle={{fontWeight: '900', color: colors.bizarroTessarak}}
            theme={{roundness: 1}}
            onPress={() => {
              //@ts-ignore
              navigation.navigate(staked ? 'GetPhoneNumber' : 'ReadTerms');
              triggerImpactMedium();
            }}>
            Tap here to authenticate
          </Button>
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

export default LandingScreen;
