import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import {Provider as PaperProvider, Text} from 'react-native-paper';
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
import {appIsStaked, getActiveAuth} from './services/auth';
import {checkConnection, getTessarakUser, TessarakUser} from './services/api';

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
      await checkAuth();
      setIsCheckingAuth(false);
    } catch (error: any) {
      setErrorConnecting(error);
    }
  }

  async function checkAuth() {
    const auth = await getActiveAuth();
    if (auth) {
      const u = await getTessarakUser();
      // Alert.alert(JSON.stringify(u, null, 2));
      setUser(u);
      setSignedIn(true);
    } else {
      const stake = await appIsStaked();
      if (stake) {
        setStaked(true);
      }
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
