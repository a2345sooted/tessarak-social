import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DimensionsStack from '../stack-dimensions/DimensionsStack';
import ActivityScreen from './ActivityScreen';
import SearchScreen from './SearchScreen';
import UserScreen from './UserScreen';

const HomeNavStack = createNativeStackNavigator();

function HomeStack() {
  return (
    <HomeNavStack.Navigator initialRouteName="Main">
      <HomeNavStack.Screen
        name="Main"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeNavStack.Screen
        name="Dimensions"
        component={DimensionsStack}
        options={{headerShown: false, presentation: 'modal'}}
      />
      <HomeNavStack.Screen
        name="Activity"
        component={ActivityScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
      <HomeNavStack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
      <HomeNavStack.Screen
        name="User"
        component={UserScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
    </HomeNavStack.Navigator>
  );
}

export default HomeStack;
