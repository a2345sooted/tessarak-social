import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from './AccountScreen';
import AccountSettingsScreen from './AccountSettingsScreen';

const ProfileNavStack = createNativeStackNavigator();

function AccountStack() {
  return (
    <ProfileNavStack.Navigator initialRouteName="Main">
      <ProfileNavStack.Screen
        name="Main"
        component={AccountScreen}
        options={{headerShown: false}}
      />
      <ProfileNavStack.Screen
        name="Settings"
        component={AccountSettingsScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
    </ProfileNavStack.Navigator>
  );
}

export default AccountStack;
