import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DimensionsScreen from './DimensionsScreen';

const DimensionsNavStack = createNativeStackNavigator();

function DimensionsStack() {
  return (
    <DimensionsNavStack.Navigator initialRouteName="DimensionsScreen">
      <DimensionsNavStack.Screen
        name="DimensionsScreen"
        component={DimensionsScreen}
        options={{headerShown: false}}
      />
    </DimensionsNavStack.Navigator>
  );
}

export default DimensionsStack;