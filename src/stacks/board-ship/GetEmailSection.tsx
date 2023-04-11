import React, {useContext, useRef, useState} from 'react';
import {AppContext} from '@app-ctx';
import Animated, {
  FadeInDown,
  FadeInRight,
  FadeOutDown,
  FadeOutRight,
} from 'react-native-reanimated';
import {View} from 'react-native';
import {Button, IconButton, Text, TextInput} from 'react-native-paper';

export interface GetEmailSectionProps {
  nextFn: () => void;
  prevFn: () => void;
}

const GetEmailSection = ({nextFn, prevFn}: GetEmailSectionProps) => {
  const {colors} = useContext(AppContext);
  const emailInputRef = useRef<any>();
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [email, setEmail] = useState('');

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
          What is your email?
        </Text>
      </View>
      <View
        style={{
          marginTop: 12,
          paddingHorizontal: 50,
        }}>
        <TextInput
            autoFocus
          disabled={isSendingCode}
          placeholder=" "
          maxLength={20}
          keyboardType="email-address"
          autoCapitalize="none"
          returnKeyType="done"
          // onSubmitEditing={handleSubmit}
          ref={(input: any) => (emailInputRef.current = input)}
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
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
        />
      </View>
      {email.length > 2 && (
        <Animated.View
          style={{marginTop: 20, paddingHorizontal: 30}}
          entering={FadeInDown.duration(600)}
          exiting={FadeOutDown.duration(600)}>
          <Button
            mode="outlined"
            uppercase
            labelStyle={{fontWeight: '900', color: '#48d203'}}>
            Send Code
          </Button>
        </Animated.View>
      )}
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
          onPress={prevFn}
          icon="arrow-left"
          iconColor={colors.text}
          size={30}
          mode="outlined"
        />
      </Animated.View>
    </Animated.View>
  );
};

export default GetEmailSection;
