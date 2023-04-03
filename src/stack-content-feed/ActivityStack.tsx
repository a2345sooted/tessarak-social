import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContentFeedStack from './ContentFeedStack';

const ActivityNavStack = createNativeStackNavigator();
const ActivityDrawer = createDrawerNavigator();

function ActivityStack() {
  return (
    <ActivityNavStack.Navigator initialRouteName="ContentFeedStack">
      <ActivityNavStack.Screen
        name="ContentFeedStack"
        component={ContentFeedStack}
        options={{headerShown: false}}
      />
    </ActivityNavStack.Navigator>
  );
}

export default ActivityStack;
