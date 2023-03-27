import React from 'react';
import CreateScreen from './CreateScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TemplatesScreen from './TemplatesScreen';

const CreateNavStack = createNativeStackNavigator();

function CreateStack() {
  return (
    <CreateNavStack.Navigator initialRouteName="Main">
      <CreateNavStack.Screen
        name="Main"
        component={CreateScreen}
        options={{headerShown: false}}
      />
      <CreateNavStack.Screen
        name="Templates"
        component={TemplatesScreen}
        options={{headerShown: false, presentation: 'modal'}}
      />
    </CreateNavStack.Navigator>
  );
}

export default CreateStack;
