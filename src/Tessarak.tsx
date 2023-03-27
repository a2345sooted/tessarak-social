import React, {useEffect, useState} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import LandingScreen from './LandingScreen';
import {AppContext, BrightnessMode} from '@app-ctx';
import {
  AppColors,
  DarkAppColors,
  LightAppColors,
  NAV_THEME,
  PAPER_THEME,
} from './theme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {isDarkMode} from './utils';
import AppStack from './AppStack';

function getAppColors(mode: string): AppColors {
  return mode === 'light' ? LightAppColors : DarkAppColors;
}

const RootStack = createNativeStackNavigator();

const Tessarak = () => {
  const deviceBrightMode = useColorScheme();
  const [appBrightMode, setAppBrightMode] = useState<BrightnessMode>('device');
  const [colors, setColors] = useState<AppColors>(
    getAppColors(appBrightMode as string),
  );

  function getStatusBar() {
    const darkMode = isDarkMode(appBrightMode, deviceBrightMode);
    return (
      <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.dark}
      />
    );
  }
  const [statusBar, setStatusBar] = useState<JSX.Element>(getStatusBar());

  useEffect(() => {
    updateColors();
  }, [appBrightMode, deviceBrightMode]);

  function updateColors() {
    const mode = appBrightMode === 'device' ? deviceBrightMode : appBrightMode;
    setColors(getAppColors(mode as string));
    setStatusBar(getStatusBar());
  }

  function updateBrightMode(mode: BrightnessMode) {
    setAppBrightMode(mode);
  }

  return (
    <AppContext.Provider
      value={{
        updateBrightMode,
        appBrightMode,
        deviceBrightMode,
        colors,
        statusBar,
      }}>
      <PaperProvider theme={PAPER_THEME}>
        <NavigationContainer theme={NAV_THEME}>
          <RootStack.Navigator initialRouteName="App">
            <RootStack.Screen
              name="Landing"
              component={LandingScreen}
              options={{headerShown: false, animation: 'none'}}
            />
            <RootStack.Screen
              name="App"
              component={AppStack}
              options={{headerShown: false, presentation: 'fullScreenModal'}}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </AppContext.Provider>
  );
};

export default Tessarak;
