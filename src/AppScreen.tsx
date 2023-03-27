import React, {useContext} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {AppContext} from './AppContext';
import SafeScreen from './common/SafeScreen';

const AppScreen = () => {
  const {colors} = useContext(AppContext);

  return (
    <SafeScreen>
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
    </SafeScreen>
  );
};

export default AppScreen;
