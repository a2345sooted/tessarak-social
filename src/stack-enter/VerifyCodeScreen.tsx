import React, {useContext, useEffect, useRef, useState} from 'react';
import {Text, TextInput} from 'react-native-paper';
import {SafeScreen} from '@common';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {tkDelay} from '../utils';
import {sendCodeToPhone} from '../services/auth';
import {formatWithMask, Masks} from 'react-native-mask-input';

const VerifyCodeScreen = () => {
  const {colors} = useContext(AppContext);
  const navigation = useNavigation();
  const phoneInputRef = useRef<any>();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [maskedPhoneNumber, setMaskedPhoneNumber] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isInvalidNumber, setIsInvalidNumber] = useState(false);
  const [errorSending, setErrorSending] = useState<any>(null);

  useEffect(() => {
    tkDelay(600).then(() => phoneInputRef.current?.focus());
  }, []);

  async function handlePhoneInputComplete() {
    if (!phoneNumber.trim()) {
      await tkDelay(100);
      phoneInputRef.current!.focus();
      return;
    }

    setIsSending(true);
    setErrorSending(null);
    setIsInvalidNumber(false);

    const phone = `+1${phoneNumber}`;

    try {
      await sendCodeToPhone(phone);
      //@ts-ignore
      navigation.navigate('VerifyCode');
      await tkDelay(1000);
    } catch (error: any) {
      // todo handle invalid number
      setErrorSending(error);
    } finally {
      setIsSending(false);
    }
  }

  function formatText(text: string) {
    const {unmasked, masked} = formatWithMask({
      text,
      mask: Masks.USA_PHONE,
    });
    setPhoneNumber(unmasked);
    setMaskedPhoneNumber(masked);
  }

  return (
    <SafeScreen>
      <View style={{flex: 1, paddingHorizontal: 30}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 100,
          }}>
          <Text
            variant="titleLarge"
            style={{
              fontWeight: 'bold',
              color: colors.text,
            }}>
            Enter the code...
          </Text>
        </View>
        <View style={{marginTop: 10, paddingHorizontal: 10}}>
          <TextInput
            // autoFocus
            disabled={isSending}
            keyboardType="number-pad"
            returnKeyType="done"
            onSubmitEditing={handlePhoneInputComplete}
            ref={(input: any) => (phoneInputRef.current = input)}
            style={{fontSize: 26, textAlign: 'center', paddingHorizontal: 8}}
            textColor={colors.text}
            underlineColor={colors.user}
            activeUnderlineColor={colors.user}
            contentStyle={{
              paddingTop: 10,
              paddingBottom: 10,
              backgroundColor: colors.bg1,
            }}
            mode="flat"
            label=""
            value={maskedPhoneNumber}
            onChangeText={text => formatText(text)}
          />
        </View>
      </View>
    </SafeScreen>
  );
};

export default VerifyCodeScreen;
