import React, {useContext} from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateStack from './stack-create/CreateStack';
import TessaStack from './stack-tessa/TessaStack';
import MessagesStack from './stack-messages/MessagesStack';
import HomeStack from './stack-home/HomeStack';
import {IconButton} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import AccountStack from './stack-account/AccountStack';
import MarketplaceStack from './stack-marketplace/MarketplaceStack';

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
        size={isFocused ? 35 : 25}
        onPress={() => navigation.navigate(route)}
      />
    );
  }
  return (
    <>
      <View style={{flex: 1}}>
        <AppNavStack.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarStyle: {backgroundColor: colors.bg1, borderTopWidth: 0},
          }}>
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
                name="Market"
                component={MarketplaceStack}
                options={({navigation}) => ({
                    headerShown: false,
                    tabBarLabelStyle: {color: colors.text},
                    tabBarIcon: ({focused}) =>
                        bottomTab(navigation, 'storefront', 'Market', focused),
                })}
            />
          <AppNavStack.Screen
            name="Account"
            component={AccountStack}
            options={({navigation}) => ({
              headerShown: false,
              tabBarLabelStyle: {color: colors.text},
              tabBarIcon: ({focused}) =>
                bottomTab(navigation, 'account-box', 'Account', focused),
            })}
          />
            <AppNavStack.Screen
                name="Tessa"
                component={TessaStack}
                options={({navigation}) => ({
                    headerShown: false,
                    tabBarLabelStyle: {color: colors.text},
                    tabBarIcon: ({focused}) =>
                        bottomTab(navigation, 'robot-excited', 'Tessa', focused),
                })}
            />
        </AppNavStack.Navigator>
      </View>
    </>
  );
}

export default AppStack;
