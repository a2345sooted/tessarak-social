import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateStack from './stack-create/CreateStack';
import TessaStack from './stack-tessa/TessaStack';
import MessagesStack from './stack-messages/MessagesStack';
import HomeStack from './stack-home/HomeStack';
import ProfileStack from './stack-profile/ProfileStack';

const AppNavStack = createBottomTabNavigator();

function AppStack() {
  return (
    <>
      <View style={{flex: 1}}>
        <AppNavStack.Navigator initialRouteName="Home">
          <AppNavStack.Screen
            name="Create"
            component={CreateStack}
            options={{headerShown: false}}
          />
          <AppNavStack.Screen
            name="Profile"
            component={ProfileStack}
            options={{headerShown: false}}
          />
          <AppNavStack.Screen
            name="Home"
            component={HomeStack}
            options={{headerShown: false}}
          />
          <AppNavStack.Screen
            name="Messages"
            component={MessagesStack}
            options={{headerShown: false}}
          />
          <AppNavStack.Screen
            name="Tessa"
            component={TessaStack}
            options={{headerShown: false}}
          />
        </AppNavStack.Navigator>
      </View>
    </>
  );
}

export default AppStack;
