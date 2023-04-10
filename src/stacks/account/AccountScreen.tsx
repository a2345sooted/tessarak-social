import React, {useContext} from 'react';
import {IconButton, Text} from 'react-native-paper';
import {SafeScreen} from '@common';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {maskPhoneNumber} from '@utils';

const AccountScreen = () => {
  const {colors, user} = useContext(AppContext);

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
          {maskPhoneNumber(user!.phone.substring(2))}
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
          Manage your Tessarak account, your ship, and your data pod here.
        </Text>
      </View>
    </SafeScreen>
  );
};

export default AccountScreen;
