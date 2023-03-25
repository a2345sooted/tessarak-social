import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import {
  Divider,
  Provider as PaperProvider,
  SegmentedButtons,
  Text,
} from 'react-native-paper';
import {AppColors} from './theme';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type SegmentedButton = {
  value: string;
  label: string;
  uncheckedColor: string;
};

const App = () => {
  const appBrightnessSetting = useColorScheme();

  const [brightnessMode, setBrightnessMode] = useState('0');
  const [isDarkMode, setIsDarkMode] = useState(appBrightnessSetting === 'dark');
  const [textColor, setTextColor] = useState(
    isDarkMode ? Colors.lighter : Colors.darker,
  );

  useEffect(() => {
    if (brightnessMode === '2') {
      setIsDarkMode(true);
    } else if (brightnessMode === '1') {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(appBrightnessSetting === 'dark');
    }
  }, [brightnessMode, appBrightnessSetting]);

  useEffect(() => {
    setTextColor(isDarkMode ? Colors.lighter : Colors.darker);
  }, [isDarkMode]);

  function brightnessOption(value: string, label: string): SegmentedButton {
    return {
      value,
      label,
      uncheckedColor: isDarkMode ? Colors.lighter : Colors.darker,
    };
  }

  return (
    <PaperProvider>
      <SafeAreaView
        style={{
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
          flex: 1,
        }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={{flex: 1, paddingHorizontal: 30}}>
          <View style={{paddingTop: 100}}>
            <Text
              variant="displayMedium"
              style={{fontWeight: 'bold', color: AppColors.tessarakOne}}>
              Tessarak
            </Text>
          </View>
          <Divider style={{marginVertical: 20}} />
          <View>
            <Text
              variant="titleLarge"
              style={{
                fontWeight: 'bold',
                color: textColor,
              }}>
              Opensource, Decentralized Social Media
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text
              variant="titleLarge"
              style={{
                fontWeight: 'bold',
                color: textColor,
              }}>
              Five+ dimensions, ZERO compromises.
            </Text>
          </View>
        </View>
        <View
          style={{
            marginBottom: 50,
            paddingHorizontal: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: textColor,
              }}>
              Brightness Mode
            </Text>
          </View>
          <SegmentedButtons
            buttons={[
              brightnessOption('0', 'Device'),
              brightnessOption('1', 'Light'),
              brightnessOption('2', 'Dark'),
            ]}
            value={brightnessMode}
            onValueChange={setBrightnessMode}
          />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
