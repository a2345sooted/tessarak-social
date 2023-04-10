import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import {Provider as PaperProvider, Text} from 'react-native-paper';
import {AppContext, BrightnessMode} from '@app-ctx';
import {
  AppColors,
  DarkAppColors,
  LightAppColors,
  NAV_THEME,
  PAPER_THEME,
} from '@theme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {isDarkMode} from '@utils';
import AppStack from './AppStack';

import SystemNavigationBar from 'react-native-system-navigation-bar';
import {appIsStaked, getActiveAuth} from '@auth';
import {checkConnection, getTessarakUser, TessarakUser} from '@api';
import EnterStack from './stacks/enter/EnterStack';
import StartStack from './stacks/stack-start/StartStack';

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
  const [errorConnecting, setErrorConnecting] = useState<any>(null);
  const [staked, setStaked] = useState(false);
  const [user, setUser] = useState<TessarakUser | null>(null);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    startApp();
  }, []);

  async function startApp() {
    try {
      await checkConnection();
    } catch (error: any) {
      // console.error(`error checking connection: ${error}`);
      setErrorConnecting(error);
    }
    try {
      await checkAuth();
    } catch (error: any) {
      // console.error(`error checking auth: ${error}`);
    }
    const stake = await appIsStaked();
    if (stake) {
      setStaked(true);
    }
    setIsCheckingAuth(false);
  }

  async function checkAuth() {
    const auth = await getActiveAuth();
    if (auth) {
      console.log('have active auth');
      const u = await getTessarakUser();
      console.log('got tessrak user');
      setUser(u);
      setSignedIn(true);
    } else {
      console.log('no active auth');
    }
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
    SystemNavigationBar.setNavigationColor(colors.bg1);
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
        user,
        checkAuth,
      }}>
      <PaperProvider theme={PAPER_THEME}>
        <NavigationContainer theme={NAV_THEME}>
          {errorConnecting && (
            <SafeAreaView
              style={{
                flex: 1,
                backgroundColor: colors.bg1,
              }}>
              <Text
                variant="titleLarge"
                style={{
                  fontWeight: 'bold',
                  color: colors.text,
                  marginTop: 150,
                  paddingHorizontal: 20,
                }}>
                Unable to connect to the Tessarak beta servers. Try closing the
                app completely and reopening.
              </Text>
            </SafeAreaView>
          )}
          {isCheckingAuth && (
            <View
              style={{
                flex: 1,
                backgroundColor: colors.bg1,
              }}
            />
          )}
          {!isCheckingAuth && !errorConnecting && (
            // <RootStack.Navigator initialRouteName={signedIn ? 'App' : 'Enter'}>
            <RootStack.Navigator initialRouteName="Start">
              <RootStack.Screen
                name="Start"
                component={StartStack}
                options={{headerShown: false, animation: 'none'}}
              />
              {/*<RootStack.Screen*/}
              {/*  name="Enter"*/}
              {/*  component={EnterStack}*/}
              {/*  options={{headerShown: false, animation: 'none'}}*/}
              {/*/>*/}
              {/*<RootStack.Screen*/}
              {/*  name="App"*/}
              {/*  component={AppStack}*/}
              {/*  options={{*/}
              {/*    headerShown: false,*/}
              {/*    presentation: 'fullScreenModal',*/}
              {/*  }}*/}
              {/*/>*/}
            </RootStack.Navigator>
          )}
        </NavigationContainer>
      </PaperProvider>
    </AppContext.Provider>
  );
};

export default Tessarak;
