import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TessaScreen from './TessaScreen';

const TessaNavStack = createNativeStackNavigator();

function TessaStack() {
  return (
    <TessaNavStack.Navigator initialRouteName="Main">
      <TessaNavStack.Screen
        name="Main"
        component={TessaScreen}
        options={{headerShown: false}}
      />
    </TessaNavStack.Navigator>
  );
}

export default TessaStack;
