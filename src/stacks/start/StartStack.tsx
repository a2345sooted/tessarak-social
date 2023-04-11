import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from './LandingScreen';
import IntroScreen from './IntroScreen';
import BoardShipStack from '../board-ship/BoardShipStack';

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
        name="IntroScreen"
        component={IntroScreen}
        options={{headerShown: false}}
      />
      <StartNavStack.Screen
        name="BoardShip"
        component={BoardShipStack}
        options={{headerShown: false}}
      />
    </StartNavStack.Navigator>
  );
}

export default StartStack;
