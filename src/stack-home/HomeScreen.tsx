import React, {useContext} from 'react';
import {IconButton, Text} from 'react-native-paper';
import SafeScreen from '../common/SafeScreen';
import {AppContext} from '@app-ctx';
import { Alert, View } from 'react-native';

const HomeScreen = () => {
  const {colors} = useContext(AppContext);

  return (
    <SafeScreen>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconButton
          icon="apps"
          iconColor={colors.tessarak}
          size={25}
          onPress={() => {}}
        />
        <Text
          variant="headlineSmall"
          style={{fontWeight: 'bold', color: colors.text, flex: 1}}>
          #tessarak-beta
        </Text>
        <IconButton
          icon="video-wireless-outline"
          iconColor={colors.tessarak}
          size={25}
          onPress={() => Alert.alert('Live Stream')}
        />
        <IconButton
          icon="layers-search-outline"
          iconColor={colors.tessarak}
          size={25}
          onPress={() => Alert.alert('Search the Tessarak')}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 30}}>
        <Text
          variant="headlineSmall"
          style={{fontWeight: 'bold', color: colors.text}}>
          TikTok like feed section based on which dimension you're in. Click up
          top to change dimensions.
        </Text>
      </View>
    </SafeScreen>
  );
};

export default HomeScreen;
