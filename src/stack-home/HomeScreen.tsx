import React, {useContext} from 'react';
import {Text} from 'react-native-paper';
import SafeScreen from '../common/SafeScreen';
import {AppContext} from '@app-ctx';

const HomeScreen = () => {
  const {colors} = useContext(AppContext);

  return (
    <SafeScreen>
      <Text
        variant="displayLarge"
        style={{fontWeight: 'bold', color: colors.tessarak}}>
        Home Screen
      </Text>
    </SafeScreen>
  );
};

export default HomeScreen;
