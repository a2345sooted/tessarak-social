import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppScreen from './AppScreen';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from 'react-native-paper';
import {AppContext} from './AppContext';

const AppNavStack = createNativeStackNavigator();

function AppStack() {
  const insets = useSafeAreaInsets();
  const {colors} = useContext(AppContext);
  return (
    <>
      <View style={{flex: 1}}>
        <AppNavStack.Navigator initialRouteName="Home">
          <AppNavStack.Screen
            name="Home"
            component={AppScreen}
            options={{headerShown: false, animation: 'none'}}
          />
        </AppNavStack.Navigator>
      </View>
      <View
        style={{
          backgroundColor: '#af0c0c',
          paddingBottom: insets.bottom,
        }}>
        <Text
          variant="displayLarge"
          style={{fontWeight: 'bold', color: colors.tessarak}}>
          Tessarak
        </Text>
      </View>
    </>
  );
}

export default AppStack;
