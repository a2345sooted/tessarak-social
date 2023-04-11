import React, {useContext} from 'react';
import {Button, Divider, IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {FadeInDown, FadeOutDown} from 'react-native-reanimated';
import {StartFooter} from '../start/IntroScreen';
import {BoardShipContext} from './BoardShipStack';

const BoardShipLandingScreen = () => {
  const {colors} = useContext(AppContext);
  const {ship, agreedToRules} = useContext(BoardShipContext);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  function handleReadRulesPress() {
    //@ts-ignore
    navigation.navigate('ShipRulesScreen');
  }

  function handleBoardShipPress() {
    //@ts-ignore
    navigation.navigate('SetupShipAuthScreen');
  }

  return (
    <View
      style={{backgroundColor: colors.bg1, flex: 1, paddingTop: insets.top}}>
      {/*<View style={{flexDirection: 'row', alignItems: 'center'}}>*/}
      {/*  <IconButton*/}
      {/*    icon="arrow-left"*/}
      {/*    iconColor={colors.text}*/}
      {/*    size={30}*/}
      {/*    onPress={() => navigation.goBack()}*/}
      {/*  />*/}
      {/*</View>*/}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconButton
          icon="arrow-left"
          iconColor={colors.text}
          size={30}
          onPress={() => navigation.goBack()}
          style={{flex: 1}}
        />
        <IconButton
          icon="bell"
          iconColor={'#bb9604'}
          size={60}
          style={{flex: 2}}
        />
        <View style={{flex: 1}} />
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          // flexDirection: 'row',
          //   justifyContent: 'center',
          // alignItems: 'center',
        }}>
        {/*<View>*/}
        {/*<View style={{flexDirection: 'row', justifyContent: 'center'}}>*/}
        {/*  <IconButton icon="bell" iconColor={'#bb9604'} size={30} />*/}
        {/*</View>*/}
        <Text
          variant="headlineSmall"
          style={{fontWeight: 'bold', color: colors.text, textAlign: 'center'}}>
          {ship?.name}
        </Text>
        <Text
          variant="titleSmall"
          style={{color: colors.bizarroTessarak, textAlign: 'center'}}>
          {ship?.domain}
        </Text>
        {/*</View>*/}
      </View>
      {/*<View*/}
      {/*  style={{*/}
      {/*    marginTop: 12,*/}
      {/*    paddingHorizontal: 20,*/}
      {/*    flexDirection: 'row',*/}
      {/*    alignItems: 'center',*/}
      {/*  }}>*/}
      {/*  /!*<IconButton icon="bell" iconColor={'#bb9604'} size={30} />*!/*/}
      {/*  <View>*/}
      {/*    <Text*/}
      {/*      variant="titleLarge"*/}
      {/*      style={{fontWeight: 'bold', color: colors.text}}>*/}
      {/*      {ship?.name}*/}
      {/*    </Text>*/}
      {/*    <Text*/}
      {/*      variant="titleSmall"*/}
      {/*      style={{color: colors.text}}>*/}
      {/*      {ship?.motto}*/}
      {/*    </Text>*/}
      {/*  </View>*/}
      {/*</View>*/}
      <View
        style={{
          marginTop: 12,
          paddingHorizontal: 20,
        }}>
        <Text variant="titleSmall" style={{color: colors.text}}>
          {ship?.description}
        </Text>
      </View>
      <View
        style={{
          marginTop: 12,
          paddingHorizontal: 20,
        }}>
        <Divider style={{marginVertical: 8}} />
        <Text
          variant="titleSmall"
          style={{fontWeight: 'bold', color: colors.tessarak}}>
          Owned & maintained by:
        </Text>
        <Text
          variant="titleMedium"
          style={{fontWeight: 'bold', color: colors.text}}>
          {ship?.owner.name}
        </Text>
      </View>
      <View
        style={{
          marginTop: 12,
          paddingHorizontal: 20,
        }}>
        <Text
          variant="titleSmall"
          style={{fontWeight: 'bold', color: colors.tessarak}}>
          # Orbs:
        </Text>
        <Text
          variant="headlineMedium"
          style={{fontWeight: '800', color: colors.text}}>
          {ship?.numOrbs}
        </Text>
      </View>
      <View
        style={{
          marginTop: 24,
          paddingHorizontal: 20,
        }}>
        <Text
          variant="titleSmall"
          style={{fontWeight: 'bold', color: colors.text, marginBottom: 8}}>
          !! You must agree to the ship's rules to board.
        </Text>
        <Button
          icon={'text-box-check'}
          onPress={handleReadRulesPress}
          uppercase
          mode="contained"
          labelStyle={{fontWeight: '800'}}
          buttonColor={'#c66ef1'}>
          Read the Rules
        </Button>
      </View>
      {agreedToRules && (
        <Animated.View
          entering={FadeInDown.duration(600)}
          exiting={FadeOutDown.duration(600)}
          style={{
            marginTop: 12,
            paddingHorizontal: 20,
          }}>
          <Button
            icon={'arrow-right'}
            onPress={handleBoardShipPress}
            uppercase
            mode="contained"
            labelStyle={{fontWeight: '800'}}
            buttonColor={colors.tessarak}>
            Board the Ship
          </Button>
        </Animated.View>
      )}
      <View style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
        <StartFooter />
      </View>
    </View>
  );
};

export default BoardShipLandingScreen;
