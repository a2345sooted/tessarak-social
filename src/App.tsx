import React, {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import LandingScreen from './LandingScreen';
import {AppContext, BrightnessMode} from './AppContext';
import {AppColors, DarkAppColors, LightAppColors} from './theme';

function getAppColors(mode: string): AppColors {
  return mode === 'light' ? LightAppColors : DarkAppColors;
}

const App = () => {
  const deviceBrightMode = useColorScheme();
  const [appBrightMode, setAppBrightMode] = useState<BrightnessMode>('device');
  const [colors, setColors] = useState<AppColors>(DarkAppColors);

  useEffect(() => {
    const mode = appBrightMode === 'device' ? deviceBrightMode : appBrightMode;
    setColors(getAppColors(mode as string));
  }, [appBrightMode, deviceBrightMode]);

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
      }}>
      <PaperProvider>
        <LandingScreen />
      </PaperProvider>
    </AppContext.Provider>
  );
};

export default App;
