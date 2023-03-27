import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from './AccountScreen';

const ProfileNavStack = createNativeStackNavigator();

function AccountStack() {
  return (
    <ProfileNavStack.Navigator initialRouteName="Main">
      <ProfileNavStack.Screen
        name="Main"
        component={AccountScreen}
        options={{headerShown: false}}
      />
    </ProfileNavStack.Navigator>
  );
}

export default AccountStack;
