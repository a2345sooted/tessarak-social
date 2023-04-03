import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DimensionsStack from '../stack-dimensions/DimensionsStack';
import ActivityScreen from './ActivityScreen';
import SearchScreen from './SearchScreen';
import UserScreen from './UserScreen';
import ContentFeedStack from '../stack-content-feed/ContentFeedStack';

const TessarakNavStack = createNativeStackNavigator();

function TessarakStack() {
  return (
    <TessarakNavStack.Navigator initialRouteName="ContentFeed">
      <TessarakNavStack.Screen
        name="ContentFeed"
        component={ContentFeedStack}
        options={{headerShown: false}}
      />
      <TessarakNavStack.Screen
        name="Dimensions"
        component={DimensionsStack}
        options={{headerShown: false, presentation: 'modal'}}
      />
      <TessarakNavStack.Screen
        name="Activity"
        component={ActivityScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
      <TessarakNavStack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
      <TessarakNavStack.Screen
        name="User"
        component={UserScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
    </TessarakNavStack.Navigator>
  );
}

export default TessarakStack;
