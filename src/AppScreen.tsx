import React, {useCallback, useContext} from 'react';
import {SafeAreaView, StatusBar, StatusBarStyle, View} from 'react-native';
import {Provider as PaperProvider, Text} from 'react-native-paper';
import {AppContext} from './AppContext';
import {isDarkMode} from './utils';
import {useNavigation} from '@react-navigation/native';

const AppScreen = () => {
  const {appBrightMode, colors, deviceBrightMode} = useContext(AppContext);

  const navigation = useNavigation();

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
              Apppppp
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default AppScreen;
