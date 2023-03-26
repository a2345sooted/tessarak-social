import React, {useCallback, useContext} from 'react';
import {SafeAreaView, StatusBar, StatusBarStyle, View} from 'react-native';
import {
  Button,
  Divider,
  Provider as PaperProvider,
  SegmentedButtons,
  Text,
} from 'react-native-paper';
import {AppContext, BrightnessMode} from './AppContext';
import {isDarkMode} from './utils';
import { useNavigation } from '@react-navigation/native';

type SegmentedButton = {
  value: string;
  label: string;
  uncheckedColor: string;
};

const LandingScreen = () => {
  const {appBrightMode, colors, deviceBrightMode, updateBrightMode} =
    useContext(AppContext);

  const navigation = useNavigation();

  function brightnessOption(
    value: BrightnessMode,
    label: string,
  ): SegmentedButton {
    return {
      value,
      label,
      uncheckedColor: colors.text,
    };
  }

  const statusBarColor = useCallback((): StatusBarStyle => {
    return isDarkMode(appBrightMode, deviceBrightMode)
      ? 'light-content'
      : 'dark-content';
  }, [appBrightMode, deviceBrightMode]);

  return (
    <PaperProvider>
      <SafeAreaView
        style={{
          backgroundColor: colors.bg1,
          flex: 1,
        }}>
        <StatusBar barStyle={statusBarColor()} />
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
          {/*<Divider style={{marginVertical: 20}} />*/}
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text
              variant="titleLarge"
              style={{
                fontWeight: 'bold',
                color: colors.text,
              }}>
              choose your dimension
            </Text>
          </View>
          <View style={{marginTop: 100, paddingHorizontal: 10}}>
            <Button
              labelStyle={{color: colors.text, fontWeight: 'bold'}}
              buttonColor={colors.tessarak}
              uppercase
              theme={{roundness: 1}}
              onPress={() => navigation.navigate('App')}>
              Enter
            </Button>
          </View>
        </View>
        {/*<View*/}
        {/*  style={{*/}
        {/*    marginBottom: 50,*/}
        {/*    paddingHorizontal: 30,*/}
        {/*  }}>*/}
        {/*  <View*/}
        {/*    style={{*/}
        {/*      flexDirection: 'row',*/}
        {/*      justifyContent: 'center',*/}
        {/*      marginBottom: 10,*/}
        {/*    }}>*/}
        {/*    <Text*/}
        {/*      style={{*/}
        {/*        fontWeight: 'bold',*/}
        {/*        color: colors.text,*/}
        {/*      }}>*/}
        {/*      Brightness Mode*/}
        {/*    </Text>*/}
        {/*  </View>*/}
        {/*  <SegmentedButtons*/}
        {/*    buttons={[*/}
        {/*      brightnessOption('device', 'Device'),*/}
        {/*      brightnessOption('light', 'Light'),*/}
        {/*      brightnessOption('dark', 'Dark'),*/}
        {/*    ]}*/}
        {/*    value={appBrightMode}*/}
        {/*    onValueChange={value => updateBrightMode(value as BrightnessMode)}*/}
        {/*  />*/}
        {/*</View>*/}
      </SafeAreaView>
    </PaperProvider>
  );
};

export default LandingScreen;
