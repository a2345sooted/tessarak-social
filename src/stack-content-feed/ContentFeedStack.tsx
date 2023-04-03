import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

const ContentFeedNavStack = createNativeStackNavigator();

function ContentFeedStack() {
  return (
    <ContentFeedNavStack.Navigator initialRouteName="HomeScreen">
      <ContentFeedNavStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </ContentFeedNavStack.Navigator>
  );
}

export default ContentFeedStack;
