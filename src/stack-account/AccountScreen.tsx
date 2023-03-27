import React, {useContext} from 'react';
import {IconButton, Text} from 'react-native-paper';
import {SafeScreen} from '@common';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AccountScreen = () => {
  const {colors} = useContext(AppContext);

  const navigation = useNavigation();

  return (
    <SafeScreen>
      <View
        style={{
          paddingBottom: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          variant="headlineSmall"
          style={{
            fontWeight: 'bold',
            color: colors.text,
            flex: 1,
            marginLeft: 20,
          }}>
          (555) 555-5555
        </Text>
        <IconButton
          icon="cog"
          iconColor={colors.tessarak}
          size={25}
          onPress={() => {
            //@ts-ignore
            navigation.navigate('Settings');
          }}
        />
      </View>
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
