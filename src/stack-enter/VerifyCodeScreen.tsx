import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Button,
  IconButton,
  ProgressBar,
  Text,
  TextInput,
} from 'react-native-paper';
import {SafeScreen} from '@common';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {tkDelay} from '../utils';
import {sendCodeToPhone, stakeApp, verifyCodeForPhone} from '../services/auth';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const VerifyCodeScreen = () => {
  const {colors, staked} = useContext(AppContext);
  const navigation = useNavigation();

  const codeInputRef = useRef<any>();
  const [code, setCode] = useState('');

  const [isVerifying, setIsVerifying] = useState(false);
  const [errorVerifying, setErrorVerifying] = useState<any>(null);

  const [isSending, setIsSending] = useState(false);
  const [errorSending, setErrorSending] = useState<any>(null);
  const [codeSent, setCodeSent] = useState(false);

  const insets = useSafeAreaInsets();

  useEffect(() => {
    tkDelay(600).then(() => codeInputRef.current?.focus());
  }, []);

  async function focusInput() {
    await tkDelay(100);
    codeInputRef.current!.focus();
  }

  async function resendCode() {
    setIsSending(true);
    setErrorSending(null);
    setErrorVerifying(null);
    setCodeSent(false);
    setCode('');

    try {
      // const phone = await getStorageItem(STORAGE_KEY_USER_PHONE);
      // if (!phone) {
      //   navigation.goBack();
      //   return;
      // }
      await sendCodeToPhone('');
      await tkDelay(1500);
      setCodeSent(true);
      await focusInput();
    } catch (error: any) {
      setErrorSending(error);
    } finally {
      setIsSending(false);
    }
  }

  async function handleCodeInputComplete() {
    // if (!code.trim()) {
    //   await focusInput();
    //   return;
    // }
    //
    setIsVerifying(true);
    setErrorVerifying(null);
    setCodeSent(false);
    setErrorSending(null);

    try {
      await verifyCodeForPhone('', '');
      // const phone = await getStorageItem(STORAGE_KEY_USER_PHONE);
      // if (!phone) {
      //   setErrorVerifying(new Error('phone is missing in local storage'));
      //   return;
      // }
      await stakeApp();
      if (staked) {
        //@ts-ignore
        navigation.getParent()?.navigate('App');
      } else {
        //@ts-ignore
        navigation.navigate('EnterTessarak');
      }
    } catch (error: any) {
      setErrorVerifying(error);
    } finally {
      setIsVerifying(false);
    }
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
            {staked ? 'Code...' : 'Enter the code...'}
          </Text>
        </View>
        <View style={{marginTop: 10, paddingHorizontal: 10, flex: 1}}>
          <TextInput
            disabled={isSending}
            maxLength={6}
            keyboardType="number-pad"
            returnKeyType="done"
            onSubmitEditing={handleCodeInputComplete}
            ref={(input: any) => (codeInputRef.current = input)}
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
            value={code}
            onChangeText={text => {
              setCode(text);
            }}
          />
          {(isVerifying || isSending) && (
            <>
              <ProgressBar indeterminate color={colors.bizarroTessarak} />
              <Text
                variant="titleSmall"
                style={{
                  fontWeight: 'bold',
                  color: colors.bizarroTessarak,
                  textAlign: 'center',
                  marginTop: 12,
                }}>
                {isVerifying ? 'verifying code...' : 'resending code...'}
              </Text>
            </>
          )}
          {(errorVerifying || errorSending) && (
            <Text
              variant="titleSmall"
              style={{
                fontWeight: 'bold',
                color: colors.bizarroTessarak,
                marginTop: 8,
                textAlign: 'center',
              }}>
              Something went wrong. Try again.
            </Text>
          )}
          {codeSent && (
            <Text
              variant="titleSmall"
              style={{
                fontWeight: 'bold',
                color: colors.bizarroTessarak,
                marginTop: 8,
                textAlign: 'center',
              }}>
              Code resent :)
            </Text>
          )}
          {!isVerifying && !isSending && (
            <>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Button
                  disabled={isVerifying || isSending}
                  mode="text"
                  labelStyle={{color: colors.tessarak, fontWeight: 'bold'}}
                  theme={{roundness: 1}}
                  onPress={resendCode}>
                  Resend Code
                </Button>
              </View>
              <View
                style={{
                  paddingBottom: 40,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <IconButton
                  disabled={isVerifying || isSending}
                  icon="keyboard-backspace"
                  iconColor={colors.tessarak}
                  size={35}
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              </View>
            </>
          )}
        </View>
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

export default VerifyCodeScreen;
