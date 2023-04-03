import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MarketplaceScreen from './MarketplaceScreen';
import MarketSettingsScreen from './MarketSettingsScreen';

const MessagesNavStack = createNativeStackNavigator();

function MarketplaceStack() {
  return (
    <MessagesNavStack.Navigator initialRouteName="MarketMain">
      <MessagesNavStack.Screen
        name="MarketMain"
        component={MarketplaceScreen}
        options={{headerShown: false}}
      />
      <MessagesNavStack.Screen
        name="MarketSettings"
        component={MarketSettingsScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
    </MessagesNavStack.Navigator>
  );
}

export default MarketplaceStack;
