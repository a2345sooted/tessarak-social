import React, {useContext, useRef, useState} from 'react';
import {AppContext} from '@app-ctx';
import Animated, { FadeInDown, FadeInRight, FadeOutDown, FadeOutLeft, FadeOutRight } from 'react-native-reanimated';
import {View} from 'react-native';
import {Button, IconButton, Text, TextInput} from 'react-native-paper';

export interface CreateUsernameSectionProps {
  nextFn: () => void;
}

const CreateUsernameSection = ({nextFn}: CreateUsernameSectionProps) => {
  const {colors} = useContext(AppContext);
  const usernameInputRef = useRef<any>();
  const [isChecking, setIsChecking] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <Animated.View
      entering={FadeInRight.duration(600)}
      exiting={FadeOutRight.duration(600)}>
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
          paddingHorizontal: 50,
        }}>
        <TextInput
            autoFocus
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
          <IconButton
            onPress={nextFn}
            icon="arrow-right"
            iconColor={colors.text}
            size={30}
            mode="outlined"
          />
        </Animated.View>
      )}
    </Animated.View>
  );
};

export default CreateUsernameSection;
