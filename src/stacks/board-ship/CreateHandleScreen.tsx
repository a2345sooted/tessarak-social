import React, {useContext, useRef, useState} from 'react';
import {Button, Divider, IconButton, Text, TextInput} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {FadeInDown, FadeOutDown} from 'react-native-reanimated';
import {StartFooter} from '../start/IntroScreen';
import {BoardShipContext} from './BoardShipStack';

const CreateHandleScreen = () => {
  const {colors} = useContext(AppContext);
  const {ship, agreedToRules} = useContext(BoardShipContext);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const usernameInputRef = useRef<any>();

  const [isChecking, setIsChecking] = useState(false);
  const [username, setUsername] = useState('');

  function handleSubmit() {}

  return (
    <View
      style={{backgroundColor: colors.bg1, flex: 1, paddingTop: insets.top}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconButton
          icon="arrow-left"
          iconColor={colors.text}
          size={30}
          onPress={() => navigation.goBack()}
          style={{flex: 1}}
        />
          <IconButton icon="bell" iconColor={'#bb9604'} size={60} style={{flex: 2}}/>
          <View style={{flex: 1}}/>
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
          style={{color: colors.text, textAlign: 'center'}}>
          {ship?.motto}
        </Text>
        {/*</View>*/}
      </View>
      <View
        style={{
          marginTop: 12,
          paddingHorizontal: 20,
        }}>
        <Text
          variant="titleMedium"
          style={{
            color: colors.bizarroTessarak,
            textAlign: 'center',
            fontWeight: '900',
          }}>
          Choose a username:
        </Text>
      </View>
      <View
        style={{
          marginTop: 12,
          paddingHorizontal: 20,
        }}>
        <TextInput
          disabled={isChecking}
          placeholder="username"
          maxLength={20}
          // keyboardType="number-pad"
          autoCapitalize="none"
          returnKeyType="done"
          // onSubmitEditing={handleSubmit}
          ref={(input: any) => (usernameInputRef.current = input)}
          style={{fontSize: 26, textAlign: 'center', paddingHorizontal: 8}}
          textColor={colors.text}
          underlineColor={colors.tessarak}
          activeUnderlineColor={colors.tessarak}
          contentStyle={{
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: colors.bg1,
          }}
          mode="flat"
          label=""
          value={username}
          onChangeText={text => {
            setUsername(text);
          }}
        />
        <Text
          variant="titleSmall"
          style={{color: colors.text, textAlign: 'center'}}>
          @tessarak.org
        </Text>
      </View>
      {username.length > 2 && (
        <Animated.View
          style={{marginTop: 20, paddingHorizontal: 30}}
          entering={FadeInDown.duration(600)}
          exiting={FadeOutDown.duration(600)}>
          <Button
            mode="outlined"
            uppercase
            labelStyle={{fontWeight: '900', color: '#48d203'}}>
            Check Availability
          </Button>
        </Animated.View>
      )}
      {username.length > 2 && true && (
        <Animated.View
          style={{
              marginTop: 8,
            paddingHorizontal: 30,
            flexDirection: 'row',
            justifyContent: 'center',
          }}
          entering={FadeInDown.duration(600)}
          exiting={FadeOutDown.duration(600)}>
          <IconButton icon="arrow-right" iconColor={colors.text} size={30} mode="outlined"/>
        </Animated.View>
      )}
      <View style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
        <StartFooter />
      </View>
    </View>
  );
};

export default CreateHandleScreen;
