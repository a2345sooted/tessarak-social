import React, {useContext} from 'react';
import {AppContext} from './AppContext';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from './LandingScreen';
import AppScreen from './AppScreen';

const AppNavStack = createNativeStackNavigator();

function AppStack() {
  const appCtx = useContext(AppContext);

  return (
    <AppNavStack.Navigator initialRouteName="Home">
      <AppNavStack.Screen
        name="Home"
        component={AppScreen}
        options={{headerShown: false, animation: 'none'}}
      />
    </AppNavStack.Navigator>
  );
}

export default AppStack;
