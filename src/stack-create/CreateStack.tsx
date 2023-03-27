import React from 'react';
import CreateScreen from './CreateScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const CreateNavStack = createNativeStackNavigator();

function CreateStack() {
  return (
    <CreateNavStack.Navigator initialRouteName="Main">
      <CreateNavStack.Screen
        name="Main"
        component={CreateScreen}
        options={{headerShown: false}}
      />
    </CreateNavStack.Navigator>
  );
}

export default CreateStack;
