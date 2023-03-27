import React, {useContext} from 'react';
import {Text} from 'react-native-paper';
import SafeScreen from '../common/SafeScreen';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';

const TessaScreen = () => {
  const {colors} = useContext(AppContext);

  return (
    <SafeScreen>
      <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 30}}>
        <Text
          variant="headlineSmall"
          style={{fontWeight: 'bold', color: colors.text}}>
          Built-in ai chatbot named Tessa. She is meant to help you find what
          you want in the Tessarak and help you make sense of the rapidly
          changing ai and media landscape. Also, whatever other cool stuff ai
          chatbots can do.
        </Text>
      </View>
    </SafeScreen>
  );
};

export default TessaScreen;
