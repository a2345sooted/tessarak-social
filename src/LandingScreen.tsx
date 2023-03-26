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

type SegmentedButton = {
  value: string;
  label: string;
  uncheckedColor: string;
};

const LandingScreen = () => {
  const {appBrightMode, colors, deviceBrightMode, updateBrightMode} =
    useContext(AppContext);

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
      ? 'dark-content'
      : 'light-content';
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
          <View style={{paddingTop: 100}}>
            <Text
              variant="displayLarge"
              style={{fontWeight: 'bold', color: colors.tessarak}}>
              Tessarak
            </Text>
          </View>
          {/*<Divider style={{marginVertical: 20}} />*/}
          <View>
            <Text
              variant="titleLarge"
              style={{
                fontWeight: 'bold',
                color: colors.text,
              }}>
              Choose your dimension.
            </Text>
          </View>
          <Divider style={{marginVertical: 20}} />
          <View>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: 'bold',
                color: colors.highlight,
              }}>
              Click around in the app and let me know what you think so far.
              Please don't be shy.
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <Button
              labelStyle={{color: colors.text, fontWeight: 'bold'}}
              buttonColor={colors.tessarak}
              uppercase
              theme={{roundness: 1}}
              onPress={() => {}}>
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
