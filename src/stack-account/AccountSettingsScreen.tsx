import React, {useContext, useState} from 'react';
import {
  Button,
  Divider,
  IconButton,
  ProgressBar,
  Text,
} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {Alert, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {clearAuth, removeStake} from '../services/auth';
import {deleteUser} from '../services/api';

const AccountSettingsScreen = () => {
  const {colors, checkAuth} = useContext(AppContext);
  const navigation = useNavigation();

  const [isDeleting, setIsDeleting] = useState(false);
  const [errorDeleting, setErrorDeleting] = useState<any>(null);

  async function handleDelete() {
    try {
      setIsDeleting(true);
      setErrorDeleting(null);
      await deleteUser();
      await clearAuth();
      await removeStake();
      await exitUserApp();
    } catch (error: any) {
      setErrorDeleting(error);
    } finally {
      setIsDeleting(false);
    }
  }

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

  async function exitUserApp() {
    navigation.goBack();
    navigation.getParent()?.getParent()?.navigate('Enter');
  }

  async function handleSignOut() {
    await clearAuth();
    await checkAuth();
    await exitUserApp();
  }

  return (
    <View style={{backgroundColor: colors.bg1, flex: 1}}>
      {isDeleting && (
        <View style={{marginTop: 100}}>
          <Text
            variant="titleLarge"
            style={{
              fontWeight: 'bold',
              color: colors.text,
              textAlign: 'center',
              marginBottom: 12,
            }}>
            Deleting account...
          </Text>
          <ProgressBar indeterminate color={colors.bizarroTessarak} />
        </View>
      )}
      {!isDeleting && (
        <>
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
          {errorDeleting && (
            <Text
              variant="titleMedium"
              style={{
                fontWeight: 'bold',
                color: colors.bizarroTessarak,
                paddingHorizontal: 25,
                marginTop: 20,
              }}>
              There was an error deleting your account. Try again.
            </Text>
          )}
          <View
            style={{paddingBottom: 10, paddingHorizontal: 30, marginTop: 150}}>
            <Button
              uppercase
              mode="outlined"
              labelStyle={{color: colors.text, fontWeight: 'bold'}}
              onPress={handleSignOut}>
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
        </>
      )}
    </View>
  );
};

export default AccountSettingsScreen;
