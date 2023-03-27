import React, {useContext} from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateStack from './stack-create/CreateStack';
import TessaStack from './stack-tessa/TessaStack';
import MessagesStack from './stack-messages/MessagesStack';
import HomeStack from './stack-home/HomeStack';
import ProfileStack from './stack-profile/ProfileStack';
import {IconButton} from 'react-native-paper';
import {AppContext} from '@app-ctx';

const AppNavStack = createBottomTabNavigator();

function AppStack() {
  const {colors} = useContext(AppContext);
  return (
    <>
      <View style={{flex: 1}}>
        <AppNavStack.Navigator initialRouteName="Home">
          <AppNavStack.Screen
            name="Create"
            component={CreateStack}
            options={{
              headerShown: false,
              tabBarIcon: () => {
                return (
                  <IconButton
                    icon="plus-box"
                    iconColor={colors.user}
                    size={25}
                    onPress={() => {}}
                  />
                );
              },
            }}
          />
          <AppNavStack.Screen
            name="Profile"
            component={ProfileStack}
            options={{
              headerShown: false,
              tabBarIcon: () => {
                return (
                  <IconButton
                    icon="account-box"
                    iconColor={colors.user}
                    size={25}
                    onPress={() => {}}
                  />
                );
              },
            }}
          />
          <AppNavStack.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerShown: false,
              title: 'Tessarak',
              tabBarIcon: () => {
                return (
                  <IconButton
                    icon="pound"
                    iconColor={colors.user}
                    size={25}
                    onPress={() => {}}
                  />
                );
              },
            }}
          />
          <AppNavStack.Screen
            name="Messages"
            component={MessagesStack}
            options={{
              headerShown: false,
              tabBarIcon: () => {
                return (
                  <IconButton
                    icon="message"
                    iconColor={colors.user}
                    size={25}
                    onPress={() => {}}
                  />
                );
              },
            }}
          />
          <AppNavStack.Screen
            name="Tessa"
            component={TessaStack}
            options={{
              headerShown: false,
              tabBarIcon: () => {
                return (
                  <IconButton
                    icon="cube"
                    iconColor={colors.user}
                    size={25}
                    onPress={() => {}}
                  />
                );
              },
            }}
          />
        </AppNavStack.Navigator>
      </View>
    </>
  );
}

export default AppStack;
