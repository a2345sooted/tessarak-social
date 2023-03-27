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

  function bottomTab(
    navigation: any,
    icon: string,
    route: string,
    isFocused: boolean,
  ): JSX.Element {
    return (
      <IconButton
        icon={icon}
        iconColor={isFocused ? colors.tessarak : colors.text}
        size={isFocused ? 30 : 25}
        onPress={() => navigation.navigate(route)}
      />
    );
  }
  return (
    <>
      <View style={{flex: 1}}>
        <AppNavStack.Navigator
          initialRouteName="Home"
          screenOptions={{tabBarStyle: {backgroundColor: colors.bg1}}}>
          <AppNavStack.Screen
            name="Create"
            component={CreateStack}
            options={({navigation}) => ({
              headerShown: false,
              tabBarLabelStyle: {color: colors.text},
              tabBarIcon: ({focused}) =>
                bottomTab(navigation, 'plus-box', 'Create', focused),
            })}
          />
          <AppNavStack.Screen
            name="Profile"
            component={ProfileStack}
            options={({navigation}) => ({
              headerShown: false,
              tabBarLabelStyle: {color: colors.text},
              tabBarIcon: ({focused}) =>
                bottomTab(navigation, 'account-box', 'Profile', focused),
            })}
          />
          <AppNavStack.Screen
            name="Home"
            component={HomeStack}
            options={({navigation}) => ({
              headerShown: false,
              tabBarLabelStyle: {color: colors.text},
              title: 'Tessarak',
              tabBarIcon: ({focused}) =>
                bottomTab(navigation, 'pound', 'Home', focused),
            })}
          />
          <AppNavStack.Screen
            name="Messages"
            component={MessagesStack}
            options={({navigation}) => ({
              headerShown: false,
              tabBarLabelStyle: {color: colors.text},
              tabBarIcon: ({focused}) =>
                bottomTab(navigation, 'message-text', 'Messages', focused),
            })}
          />
          <AppNavStack.Screen
            name="Tessa"
            component={TessaStack}
            options={({navigation}) => ({
              headerShown: false,
              tabBarLabelStyle: {color: colors.text},
              tabBarIcon: ({focused}) =>
                bottomTab(navigation, 'cube-outline', 'Tessa', focused),
            })}
          />
        </AppNavStack.Navigator>
      </View>
    </>
  );
}

export default AppStack;
