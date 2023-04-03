import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContentFeedStack from '../content-feed/ContentFeedStack';

const ActivityDrawer = createDrawerNavigator();

function ActivityStack() {
  return (
    <ActivityDrawer.Navigator initialRouteName="ContentFeedStack" screenOptions={{drawerPosition: 'right', drawerType: 'front', swipeEdgeWidth: 40}}>
      <ActivityDrawer.Screen
        name="ContentFeedStack"
        component={ContentFeedStack}
        options={{headerShown: false}}
      />
    </ActivityDrawer.Navigator>
  );
}

export default ActivityStack;
