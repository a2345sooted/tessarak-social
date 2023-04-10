import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DimensionsScreen from './DimensionsScreen';
import ArrangeDimensionsScreen from './ArrangeDimensionsScreen';

const DimensionsNavStack = createNativeStackNavigator();

function DimensionsStack() {
  return (
    <DimensionsNavStack.Navigator initialRouteName="DimensionsScreen">
      <DimensionsNavStack.Screen
        name="DimensionsScreen"
        component={DimensionsScreen}
        options={{headerShown: false}}
      />
      <DimensionsNavStack.Screen
        name="ArrangeDimensionsScreen"
        component={ArrangeDimensionsScreen}
        options={{headerShown: false}}
      />
    </DimensionsNavStack.Navigator>
  );
}

export default DimensionsStack;
