import React, {useContext} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {useNavigation} from '@react-navigation/native';
import {SafeScreen} from '@common';

const LandingScreen = () => {
  const {colors} = useContext(AppContext);

  const navigation = useNavigation();

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
            labelStyle={{color: colors.text, fontWeight: 'bold'}}
            buttonColor={colors.tessarak}
            theme={{roundness: 1}}
            onPress={() => {
              //@ts-ignore
              navigation.navigate('ReadTerms');
            }}>
            Start
          </Button>
        </View>
        <View style={{flex: 1}} />

        <View style={{paddingBottom: 20}}>
          {bulletPoint('The Tessarak Project 2023', colors.text)}
        </View>
      </View>
    </SafeScreen>
  );
};

export default LandingScreen;
