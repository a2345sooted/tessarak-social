import React, {useContext} from 'react';
import {Button, Divider, IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {Alert, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const AccountSettingsScreen = () => {
  const {colors} = useContext(AppContext);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  async function handleDelete() {}

  function confirmDelete() {
    Alert.alert(
      "You're 100 on this???",
      'You for sure want to delete your Tessarak account?',
      [
        {text: 'Yes, delete it', onPress: handleDelete},
        {
          text: 'No, cancel',
          onPress: () => {},
        },
      ],
    );
  }

  async function handleSignout() {}

  return (
    <View style={{backgroundColor: colors.bg1, flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconButton
          icon="close"
          iconColor={colors.tessarak}
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text
          variant="headlineSmall"
          style={{
            fontWeight: 'bold',
            color: colors.text,
            textAlign: 'center',
          }}>
          Account Settings
        </Text>
      </View>
      <Divider />
      <View style={{paddingBottom: 10, paddingHorizontal: 30, marginTop: 150}}>
        <Button
          uppercase
          mode="outlined"
          labelStyle={{color: colors.text, fontWeight: 'bold'}}
          onPress={handleSignout}>
          Sign Out
        </Button>
      </View>
      <View style={{paddingHorizontal: 30}}>
        <Button
          mode="text"
          labelStyle={{color: colors.text}}
          onPress={confirmDelete}>
          Delete Account
        </Button>
      </View>
    </View>
  );
};

export default AccountSettingsScreen;
