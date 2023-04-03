import React, {useEffect} from 'react';
import CreateScreen from './CreateScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TemplatesScreen from './TemplatesScreen';
import { hasAccess, requestCameraAccess, requestMicAccess } from '@permissions';

const CreateNavStack = createNativeStackNavigator();

function CreateStack() {
  useEffect(() => {
    acquirePermissions();
  }, []);

  async function acquirePermissions() {
    const hasCameraAccess = hasAccess(await requestCameraAccess());
    const hasMicAccess = hasAccess(await requestMicAccess());
    if (!hasCameraAccess || !hasMicAccess) {
      // todo ... they can't really continue here
    }
  }

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
