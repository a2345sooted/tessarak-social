import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MarketplaceScreen from './MarketplaceScreen';

const MessagesNavStack = createNativeStackNavigator();

function MarketplaceStack() {
  return (
    <MessagesNavStack.Navigator initialRouteName="Main">
      <MessagesNavStack.Screen
        name="Main"
        component={MarketplaceScreen}
        options={{headerShown: false}}
      />
    </MessagesNavStack.Navigator>
  );
}

export default MarketplaceStack;
