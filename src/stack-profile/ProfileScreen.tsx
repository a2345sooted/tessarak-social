import React, {useContext} from 'react';
import {Text} from 'react-native-paper';
import SafeScreen from '../common/SafeScreen';
import {AppContext} from '@app-ctx';

const ProfileScreen = () => {
  const {colors} = useContext(AppContext);

  return (
    <SafeScreen>
      <Text
        variant="displayLarge"
        style={{fontWeight: 'bold', color: colors.tessarak}}>
        Profile Screen
      </Text>
    </SafeScreen>
  );
};

export default ProfileScreen;
