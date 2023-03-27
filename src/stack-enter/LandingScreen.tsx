import React, {useContext} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {useNavigation} from '@react-navigation/native';
import {SafeScreen} from '@common';

const LandingScreen = () => {
  const {colors} = useContext(AppContext);

  const navigation = useNavigation();

  return (
    <SafeScreen>
      <View style={{flex: 1, paddingHorizontal: 30}}>
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
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text
            variant="titleLarge"
            style={{
              fontWeight: 'bold',
              color: colors.text,
            }}>
            choose your dimensions
          </Text>
        </View>
        <View style={{marginTop: 100, paddingHorizontal: 10}}>
          <Button
            icon="arrow-right"
            labelStyle={{color: colors.text, fontWeight: 'bold'}}
            buttonColor={colors.tessarak}
            uppercase
            theme={{roundness: 1}}
            onPress={() => {
              //@ts-ignore
              navigation.navigate('GetPhoneNumber');
            }}>
            Start
          </Button>
        </View>
      </View>
    </SafeScreen>
  );
};

export default LandingScreen;
