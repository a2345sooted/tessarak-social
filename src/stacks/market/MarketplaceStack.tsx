import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MarketplaceScreen from './MarketplaceScreen';
import MarketSettingsScreen from './MarketSettingsScreen';
import CreateListingScreen from './CreateListingScreen';
import MarketMoreToolsScreen from './MarketMoreToolsScreen';
import CreatePortalWithSellerScreen from './CreatePortalWithSellerScreen';
import MarketListingScreen from './MarketListingScreen';

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
      <MessagesNavStack.Screen
        name="MarketMoreToolsScreen"
        component={MarketMoreToolsScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
      <MessagesNavStack.Screen
        name="CreateListingScreen"
        component={CreateListingScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
      <MessagesNavStack.Screen
        name="CreatePortalWithSellerScreen"
        component={CreatePortalWithSellerScreen}
        options={{headerShown: false}}
      />
      <MessagesNavStack.Screen
        name="MarketListingScreen"
        component={MarketListingScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
    </MessagesNavStack.Navigator>
  );
}

export default MarketplaceStack;
