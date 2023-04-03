import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TessaScreen from './TessaScreen';
import TessaContextScreen from './TessaContextScreen';
import TuneTessaScreen from './TuneTessaScreen';

const TessaNavStack = createNativeStackNavigator();

function TessaStack() {
  return (
    <TessaNavStack.Navigator initialRouteName="Main">
      <TessaNavStack.Screen
        name="Main"
        component={TessaScreen}
        options={{headerShown: false}}
      />
      <TessaNavStack.Screen
        name="TessaContext"
        component={TessaContextScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
      <TessaNavStack.Screen
        name="Tune"
        component={TuneTessaScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
    </TessaNavStack.Navigator>
  );
}

export default TessaStack;
