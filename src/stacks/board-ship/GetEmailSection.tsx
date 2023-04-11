import React, {useContext, useRef, useState} from 'react';
import {AppContext} from '@app-ctx';
import Animated, {FadeInDown, FadeOutDown} from 'react-native-reanimated';
import {View} from 'react-native';
import {Button, IconButton, Text, TextInput} from 'react-native-paper';

const GetEmailSection = () => {
  const {colors} = useContext(AppContext);
  const emailInputRef = useRef<any>();
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <Animated.View
      entering={FadeInDown.duration(600)}
      exiting={FadeOutDown.duration(600)}>
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
          disabled={isSendingCode}
          placeholder="email"
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
        <Text
          variant="titleSmall"
          style={{color: colors.text, textAlign: 'center'}}>
          @tessarak.org
        </Text>
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
            Check Availability
          </Button>
        </Animated.View>
      )}
      {email.length > 2 && true && (
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

export default GetEmailSection;
