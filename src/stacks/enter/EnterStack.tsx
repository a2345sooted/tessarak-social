import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetPhoneNumberScreen from './GetPhoneNumberScreen';
import LandingScreen from './LandingScreen';
import VerifyCodeScreen from './VerifyCodeScreen';
import ReadTermsScreen from './ReadTermsScreen';
import EnterScreen from './EnterScreen';

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
        name="ReadTerms"
        component={ReadTermsScreen}
        options={{headerShown: false}}
      />
      <EnterNavStack.Screen
        name="GetPhoneNumber"
        component={GetPhoneNumberScreen}
        options={{headerShown: false}}
      />
      <EnterNavStack.Screen
        name="VerifyCode"
        component={VerifyCodeScreen}
        options={{headerShown: false}}
      />
      <EnterNavStack.Screen
        name="EnterTessarak"
        component={EnterScreen}
        options={{headerShown: false}}
      />
    </EnterNavStack.Navigator>
  );
}

export default EnterStack;
