import React, {useContext} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {useNavigation} from '@react-navigation/native';
import {SafeScreen} from '@common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {triggerImpactMedium} from '@haptic';

const EnterScreen = () => {
  const {colors} = useContext(AppContext);

  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <SafeScreen>
      <View style={{flex: 1, paddingHorizontal: 30}}>
        <View
          style={{
            paddingTop: 100,
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
            Ok, you're all set.
          </Text>
        </View>
        <View style={{marginTop: 100, paddingHorizontal: 10}}>
          <Button
            uppercase
            labelStyle={{color: colors.text, fontWeight: '800'}}
            buttonColor="#e851be"
            theme={{roundness: 1}}
            onPress={() => {
              triggerImpactMedium();
              //@ts-ignore
              navigation.getParent()?.navigate('App');
            }}>
            Enter the Tessarak
          </Button>
        </View>
        <View style={{flex: 1}} />

        <View style={{paddingBottom: 20 + insets.bottom}}>
          <Text
            variant="titleSmall"
            style={{
              fontWeight: 'bold',
              color: colors.text,
              textAlign: 'center',
            }}>
            The Tessarak Project 2023
          </Text>
        </View>
      </View>
    </SafeScreen>
  );
};

export default EnterScreen;
