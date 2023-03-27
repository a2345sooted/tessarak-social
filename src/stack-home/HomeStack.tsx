import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

const HomeNavStack = createNativeStackNavigator();

function HomeStack() {
  return (
    <HomeNavStack.Navigator initialRouteName="Main">
      <HomeNavStack.Screen
        name="Main"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </HomeNavStack.Navigator>
  );
}

export default HomeStack;
