import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './ProfileScreen';

const ProfileNavStack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <ProfileNavStack.Navigator initialRouteName="Main">
      <ProfileNavStack.Screen
        name="Main"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </ProfileNavStack.Navigator>
  );
}

export default ProfileStack;
