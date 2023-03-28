import React, {useEffect, useState} from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import {ActivityIndicator, Provider as PaperProvider} from 'react-native-paper';
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

import SystemNavigationBar from 'react-native-system-navigation-bar';
import EnterStack from './stack-enter/EnterStack';
import {appIsStaked, isSignedIn} from './services/auth';

function getAppColors(mode: string): AppColors {
  return mode === 'light' ? LightAppColors : DarkAppColors;
}

const RootStack = createNativeStackNavigator();

const Tessarak = () => {
  const deviceBrightMode = useColorScheme();
  const [appBrightMode, setAppBrightMode] = useState<BrightnessMode>('dark');
  const [colors, setColors] = useState<AppColors>(
    getAppColors(appBrightMode as string),
  );

  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [staked, setStaked] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    const auth = await isSignedIn();
    if (auth) {
      setSignedIn(true);
    } else {
      const stake = await appIsStaked();
      if (stake) {
        setStaked(true);
      }
    }
    setIsCheckingAuth(false);
  }

  function getStatusBar() {
    const darkMode = isDarkMode(appBrightMode, deviceBrightMode);
    return (
      <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.bg1}
      />
    );
  }
  const [statusBar, setStatusBar] = useState<JSX.Element>(getStatusBar());

  useEffect(() => {
    SystemNavigationBar.setNavigationColor(colors.bg1).catch(error => {});
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
        staked,
      }}>
      <PaperProvider theme={PAPER_THEME}>
        <NavigationContainer theme={NAV_THEME}>
          {isCheckingAuth && (
            <View
              style={{
                flex: 1,
                backgroundColor: colors.bg1,
              }}
            />
          )}
          {!isCheckingAuth && (
            <RootStack.Navigator initialRouteName={signedIn ? 'App' : 'Enter'}>
              <RootStack.Screen
                name="Enter"
                component={EnterStack}
                options={{headerShown: false, animation: 'none'}}
              />
              <RootStack.Screen
                name="App"
                component={AppStack}
                options={{
                  headerShown: false,
                  presentation: 'fullScreenModal',
                }}
              />
            </RootStack.Navigator>
          )}
        </NavigationContainer>
      </PaperProvider>
    </AppContext.Provider>
  );
};

export default Tessarak;
