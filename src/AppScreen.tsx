import React, {useContext} from 'react';
import {Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {SafeScreen} from './common/SafeScreen';

const AppScreen = () => {
  const {colors} = useContext(AppContext);

  return (
    <SafeScreen>
      <Text
        variant="displayLarge"
        style={{fontWeight: 'bold', color: colors.tessarak}}>
        Apppppp
      </Text>
    </SafeScreen>
  );
};

export default AppScreen;
