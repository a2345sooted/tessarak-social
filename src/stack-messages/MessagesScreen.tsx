import React, {useContext} from 'react';
import {Text} from 'react-native-paper';
import SafeScreen from '../common/SafeScreen';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';

const MessagesScreen = () => {
  const {colors} = useContext(AppContext);

  return (
    <SafeScreen>
      <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 30}}>
        <Text
          variant="headlineSmall"
          style={{fontWeight: 'bold', color: colors.text}}>
          End to end encrypted p2p messaging.
        </Text>
      </View>
    </SafeScreen>
  );
};

export default MessagesScreen;
