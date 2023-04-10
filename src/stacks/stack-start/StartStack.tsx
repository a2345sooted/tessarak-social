import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from './LandingScreen';

const StartNavStack = createNativeStackNavigator();

function StartStack() {
  return (
    <StartNavStack.Navigator initialRouteName="StartLanding">
      <StartNavStack.Screen
        name="StartLanding"
        component={LandingScreen}
        options={{headerShown: false}}
      />
    </StartNavStack.Navigator>
  );
}

export default StartStack;
