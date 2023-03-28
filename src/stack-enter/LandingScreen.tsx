import React, {useContext} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {useNavigation} from '@react-navigation/native';
import {SafeScreen} from '@common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {FadeIn} from 'react-native-reanimated';

const LandingScreen = () => {
  const {colors, staked} = useContext(AppContext);

  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  function bulletPoint(text: string, color = '#c66ef1'): JSX.Element {
    return (
      <View
        style={{
          marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text
          variant="titleLarge"
          style={{
            fontWeight: 'bold',
            color,
          }}>
          {text}
        </Text>
      </View>
    );
  }

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
            style={{fontWeight: 'bold', color: colors.tessarak}}>
            Tessarak
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <Text
            variant="titleLarge"
            style={{
              fontWeight: 'bold',
              color: colors.text,
            }}>
            choose your dimensions
          </Text>
        </View>
        {bulletPoint('opensource,')}
        {bulletPoint('decentralized,')}
        {bulletPoint('indestructible,')}
        {bulletPoint('social media', '#e851be')}
        <View style={{marginTop: 50, paddingHorizontal: 10}}>
          <Button
            icon="arrow-right"
            labelStyle={{color: colors.text, fontWeight: '800'}}
            buttonColor={colors.tessarak}
            theme={{roundness: 1}}
            onPress={() => {
              //@ts-ignore
              navigation.navigate(staked ? 'GetPhoneNumber' : 'ReadTerms');
            }}>
            {staked ? 'Sign In' : 'Start'}
          </Button>
        </View>
        <View style={{flex: 1}} />
        <View style={{paddingBottom: 20 + insets.bottom}}>
          {bulletPoint('The Tessarak Project 2023', colors.text)}
          <Text
            variant="bodyLarge"
            style={{
              color: colors.tessarak,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Version 1.1
          </Text>
        </View>
      </Animated.View>
    </SafeScreen>
  );
};

export default LandingScreen;
