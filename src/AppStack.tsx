import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppScreen from './AppScreen';
import SafeScreen from './common/SafeScreen';

const AppNavStack = createNativeStackNavigator();

function AppStack() {
  return (
    <AppNavStack.Navigator initialRouteName="Home">
      <AppNavStack.Screen
        name="Home"
        component={AppScreen}
        options={{headerShown: false, animation: 'none'}}
      />
    </AppNavStack.Navigator>
  );
}

export default AppStack;
