import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconButton} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import ContentFeedStack from './stacks/content-feed/ContentFeedStack';
import CreateStack from './stacks/create/CreateStack';
import MessagesStack from './stacks/portals/MessagesStack';
import MarketplaceStack from './stacks/market/MarketplaceStack';
import AccountStack from './stacks/account/AccountStack';
import TessaStack from './stacks/tessa/TessaStack';
import {triggerImpactMedium} from '@haptic';

const AppNavStack = createBottomTabNavigator();

function AppStackItem(
  title: string,
  icon: string,
  route: string,
  component: any,
): JSX.Element {
  const {colors} = useContext(AppContext);
  return (
    <AppNavStack.Screen
      name={route}
      component={component}
      options={({navigation}) => ({
        headerShown: false,
        tabBarLabelStyle: {color: colors.text, paddingBottom: 8},
        title: title,
        tabBarIcon: ({focused}) => (
          <IconButton
            icon={icon}
            iconColor={focused ? colors.tessarak : colors.text}
            size={focused ? 35 : 25}
            onPress={() => {
              triggerImpactMedium();
              navigation.navigate(route);
            }}
          />
        ),
      })}
    />
  );
}

function AppStack() {
  const {colors} = useContext(AppContext);
  return (
    <AppNavStack.Navigator
      initialRouteName="market"
      screenOptions={{
        tabBarStyle: {backgroundColor: colors.bg1, borderTopWidth: 0},
      }}>
      {AppStackItem('Tessarak', 'pound', 'tessarak', ContentFeedStack)}
      {AppStackItem('Create', 'plus-box', 'create', CreateStack)}
      {AppStackItem('Portals', 'text-box-multiple', 'portals', MessagesStack)}
      {AppStackItem('Market', 'storefront', 'market', MarketplaceStack)}
      {AppStackItem('Account', 'account-box', 'account', AccountStack)}
      {AppStackItem('Tessa', 'robot-excited', 'tessa', TessaStack)}
    </AppNavStack.Navigator>
  );
}

export default AppStack;
