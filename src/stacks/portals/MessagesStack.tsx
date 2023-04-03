import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MessagesScreen from './MessagesScreen';

const MessagesNavStack = createNativeStackNavigator();

function MessagesStack() {
  return (
    <MessagesNavStack.Navigator initialRouteName="Main">
      <MessagesNavStack.Screen
        name="Main"
        component={MessagesScreen}
        options={{headerShown: false}}
      />
    </MessagesNavStack.Navigator>
  );
}

export default MessagesStack;
