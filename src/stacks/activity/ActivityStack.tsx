import React from 'react';
import ActivityScreen from './ActivityScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ActivityNavStack = createNativeStackNavigator();

function ActivityStack() {
  return (
    <ActivityNavStack.Navigator initialRouteName="ContentFeedStack">
      <ActivityNavStack.Screen
        name="ContentFeedStack"
        component={ActivityScreen}
        options={{headerShown: false}}
      />
    </ActivityNavStack.Navigator>
  );
}

export default ActivityStack;
