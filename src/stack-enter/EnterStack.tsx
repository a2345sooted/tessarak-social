import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetPhoneNumberScreen from './GetPhoneNumberScreen';
import LandingScreen from './LandingScreen';

const EnterNavStack = createNativeStackNavigator();

function EnterStack() {
  return (
    <EnterNavStack.Navigator initialRouteName="Main">
      <EnterNavStack.Screen
        name="Main"
        component={LandingScreen}
        options={{headerShown: false}}
      />
      <EnterNavStack.Screen
        name="GetPhoneNumber"
        component={GetPhoneNumberScreen}
        options={{headerShown: false}}
      />
      <EnterNavStack.Screen
        name="VerifyCode"
        component={GetPhoneNumberScreen}
        options={{headerShown: false}}
      />
      <EnterNavStack.Screen
        name="Outro"
        component={GetPhoneNumberScreen}
        options={{headerShown: false}}
      />
    </EnterNavStack.Navigator>
  );
}

export default EnterStack;
