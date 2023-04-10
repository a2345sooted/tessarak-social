import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from './LandingScreen';
import IntroScreenOne from './IntroScreenOne';

const StartNavStack = createNativeStackNavigator();

function StartStack() {
  return (
    <StartNavStack.Navigator initialRouteName="StartLanding">
      <StartNavStack.Screen
        name="StartLanding"
        component={LandingScreen}
        options={{headerShown: false}}
      />
      <StartNavStack.Screen
        name="IntroScreenOne"
        component={IntroScreenOne}
        options={{headerShown: false}}
      />
    </StartNavStack.Navigator>
  );
}

export default StartStack;
