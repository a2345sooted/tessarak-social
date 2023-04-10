import React, {useContext, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Divider, IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import ContentFeedStack from './stacks/content-feed/ContentFeedStack';
import CreateStack from './stacks/create/CreateStack';
import MessagesStack from './stacks/portals/MessagesStack';
import MarketplaceStack from './stacks/market/MarketplaceStack';
import AccountStack from './stacks/account/AccountStack';
import TessaStack from './stacks/tessa/TessaStack';
import {triggerImpactMedium} from '@haptic';
import {View} from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

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
        tabBarIconStyle: {marginTop: 4},
        tabBarLabelStyle: {color: colors.text, paddingBottom: 16},
        title: title,
        tabBarIcon: ({focused}) => (
          <IconButton
            icon={icon}
            iconColor={focused ? colors.tessarak : colors.text}
            size={focused ? 40 : 30}
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

const FAKE_HINT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

function AppStack() {
  const {colors} = useContext(AppContext);

  const [tessaHint, setTessaHint] = useState(FAKE_HINT);

  return (
    <>
      <AppNavStack.Navigator
        initialRouteName="market"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.bg1,
            borderTopWidth: 0,
            height: 95,
          },
        }}>
          {AppStackItem('Control', 'rocket', 'account', AccountStack)}
        {/*{AppStackItem('Market', 'store', 'market', MarketplaceStack)}*/}
        {AppStackItem('Generate', 'shape-plus', 'create', CreateStack)}
          {AppStackItem('Tessarak', 'layers', 'tessarak', ContentFeedStack)}
        {AppStackItem('Portals', 'lan', 'portals', MessagesStack)}
        {AppStackItem('Tessa', 'robot-excited', 'tessa', TessaStack)}
      </AppNavStack.Navigator>
      {tessaHint && (
        <Animated.View
          entering={FadeIn.duration(600)}
          exiting={FadeOut.duration(600)}
          style={{
            position: 'absolute',
            bottom: 95,
            left: 0,
            right: 0,
            zIndex: 1000000,
            paddingHorizontal: 12,
            paddingVertical: 12,
          }}>
          <View
            style={{
              width: '100%',
              backgroundColor: 'rgba(2,173,173,0.9)',
              paddingHorizontal: 8,
              paddingTop: 4,
              paddingBottom: 20,
              borderRadius: 2,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                variant="titleLarge"
                style={{color: '#282828', fontWeight: 'bold', flex: 1}}>
                Tessa
              </Text>
              <IconButton
                icon={'close'}
                iconColor={'#282828'}
                onPress={() => setTessaHint('')}
              />
            </View>
            <Divider style={{marginBottom: 8, backgroundColor: '#282828'}} />
            <Text
              variant="labelLarge"
              style={{color: '#282828', fontWeight: 'bold'}}>
              {tessaHint}
            </Text>
          </View>
        </Animated.View>
      )}
    </>
  );
}

export default AppStack;
