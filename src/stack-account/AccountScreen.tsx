import React, {useContext} from 'react';
import {Text} from 'react-native-paper';
import {SafeScreen} from '@common';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';

const AccountScreen = () => {
  const {colors} = useContext(AppContext);

  return (
    <SafeScreen>
      <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 30}}>
        <Text
          variant="headlineSmall"
          style={{fontWeight: 'bold', color: colors.text, textAlign: 'center'}}>
          Account/Profile Section.
        </Text>
      </View>
    </SafeScreen>
  );
};

export default AccountScreen;
