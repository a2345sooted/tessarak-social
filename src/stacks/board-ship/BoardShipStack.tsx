import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShipRulesScreen from './ShipRulesScreen';
import BoardShipLandingScreen from './BoardShipLandingScreen';

const BoardShipNavStack = createNativeStackNavigator();

function BoardShipStack() {
  return (
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
    </BoardShipNavStack.Navigator>
  );
}

export default BoardShipStack;
