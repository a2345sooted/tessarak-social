import React, {createContext, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from './LandingScreen';
import IntroScreen from './IntroScreen';
import BoardShipStack from '../board-ship/BoardShipStack';
import TermsScreen from './TermsScreen';

export type StartContextContainer = {
  agreedToTerms: boolean;
  toggleAgreedToTerms: () => void;
};

export const StartContext = createContext<StartContextContainer>({
  agreedToTerms: undefined as any,
  toggleAgreedToTerms: undefined as any,
});

const StartNavStack = createNativeStackNavigator();

function StartStack() {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  function toggleAgreedToTerms(): void {
    setAgreedToTerms(!agreedToTerms);
  }
  return (
    <StartContext.Provider value={{agreedToTerms, toggleAgreedToTerms}}>
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
        <StartNavStack.Screen
          name="TermsScreen"
          component={TermsScreen}
          options={{headerShown: false, presentation: 'modal'}}
        />
      </StartNavStack.Navigator>
    </StartContext.Provider>
  );
}

export default StartStack;
