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
        />
      </View>
      <View
        style={{
          marginTop: 12,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <IconButton icon="bell" iconColor={'#bb9604'} size={30} />
        <View>
          <Text
            variant="titleLarge"
            style={{fontWeight: 'bold', color: colors.text}}>
            {ship?.name}
          </Text>
          <Text
            variant="titleMedium"
            style={{fontWeight: 'bold', color: colors.text}}>
            {ship?.motto}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 12,
          paddingHorizontal: 20,
        }}>
        <Text variant="titleSmall" style={{color: colors.text}}>
          In order to board, you must choose a username:
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
          style={{fontSize: 26, textAlign: 'left', paddingHorizontal: 8}}
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
        <Text variant="titleSmall" style={{color: colors.text}}>
          @tessarak.org
        </Text>
      </View>
      <View style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
        <StartFooter />
      </View>
    </View>
  );
};

export default CreateHandleScreen;
