import React, {useContext} from 'react';
import {IconButton, Text} from 'react-native-paper';
import SafeScreen from '../common/SafeScreen';
import {AppContext} from '@app-ctx';

const CreateScreen = () => {
  const {colors} = useContext(AppContext);

  return (
    <SafeScreen>

      <Text
        variant="displayLarge"
        style={{fontWeight: 'bold', color: colors.tessarak}}>
        Create Screen
      </Text>
    </SafeScreen>
  );
};

export default CreateScreen;
