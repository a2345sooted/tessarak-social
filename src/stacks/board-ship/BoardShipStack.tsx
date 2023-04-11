import React, {createContext, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShipRulesScreen from './ShipRulesScreen';
import BoardShipLandingScreen from './BoardShipLandingScreen';
import {NBZ, ShipBoardingDetails} from './mock-data';
import CreateHandleScreen from './CreateHandleScreen';

export type BoardShipContextContainer = {
  ship: ShipBoardingDetails | null;
  agreedToRules: boolean;
  setAgreed: (agreed: boolean) => void;
};

export const BoardShipContext = createContext<BoardShipContextContainer>({
  ship: undefined as any,
  agreedToRules: undefined as any,
  setAgreed: undefined as any,
});

const BoardShipNavStack = createNativeStackNavigator();

function BoardShipStack() {
  const [ship, setShip] = useState<ShipBoardingDetails | null>(NBZ);
  const [agreedToRules, setAgreedToRules] = useState(false);

  function toggleAgreedToRules(agreed: boolean): void {
    setAgreedToRules(agreed);
  }

  return (
    <BoardShipContext.Provider value={{ship, agreedToRules, setAgreed: toggleAgreedToRules}}>
      <BoardShipNavStack.Navigator initialRouteName="BoardShipLandingScreen">
        <BoardShipNavStack.Screen
          name="BoardShipLandingScreen"
          component={BoardShipLandingScreen}
          options={{headerShown: false}}
        />
        <BoardShipNavStack.Screen
          name="ShipRulesScreen"
          component={ShipRulesScreen}
          options={{headerShown: false, presentation: 'modal'}}
        />
        <BoardShipNavStack.Screen
          name="CreateHandleScreen"
          component={CreateHandleScreen}
          options={{headerShown: false}}
        />
      </BoardShipNavStack.Navigator>
    </BoardShipContext.Provider>
  );
}

export default BoardShipStack;
