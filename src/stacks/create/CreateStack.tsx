import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateVideoScreen from './CreateVideoScreen';
import CreateBeamScreen from './CreateBeamScreen';
import CreateChatScreen from './CreateChatScreen';
import CreateGameScreen from './CreateGameScreen';
import CreateSlideshowScreen from './CreateSlideshowScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppContext} from '@app-ctx';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import CreateMediaMenuScreen from './CreateMediaMenuScreen';
import MoreVideoToolsScreen from './MoreVideoToolsScreen';
import CreateMarketListingScreen from './CreateMarketListingScreen';

function CreateHeader() {
  const insets = useSafeAreaInsets();
  const {colors} = useContext(AppContext);
  const navigation = useNavigation();

  function gotoChooseMediaType() {
    //@ts-ignore
    navigation.navigate('CreateMediaMenuScreen');
  }

  function gotoMoreVideoTools() {
    //@ts-ignore
    navigation.navigate('MoreVideoToolsScreen');
  }

  return (
    <View
      style={{
        position: 'absolute',
        top: insets.top,
        left: 0,
        width: '100%',
        zIndex: 1000,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <IconButton
          icon="apps"
          iconColor={colors.bizarroTessarak}
          size={30}
          onPress={gotoChooseMediaType}
        />
        <Text
          variant="headlineSmall"
          style={{color: colors.text, fontWeight: 'bold', flex: 1}}>
          Create Video
        </Text>
        <IconButton
          style={{marginRight: -10}}
          icon="dots-horizontal-circle"
          iconColor={colors.bizarroTessarak}
          size={25}
          onPress={gotoMoreVideoTools}
        />
        <IconButton
          icon="dots-horizontal-circle"
          iconColor={colors.bizarroTessarak}
          size={25}
          onPress={gotoMoreVideoTools}
        />
      </View>
    </View>
  );
}

const CreateNavStack = createNativeStackNavigator();

function CreateStack() {
  return (
    <>
      <CreateHeader />
      <CreateNavStack.Navigator initialRouteName="CreateVideoScreen">
        <CreateNavStack.Screen
          name="CreateVideoScreen"
          component={CreateVideoScreen}
          options={{headerShown: false}}
        />
        <CreateNavStack.Screen
          name="CreateSlideshowScreen"
          component={CreateSlideshowScreen}
          options={{headerShown: false}}
        />
        <CreateNavStack.Screen
          name="CreateGameScreen"
          component={CreateGameScreen}
          options={{headerShown: false}}
        />
        <CreateNavStack.Screen
          name="CreateChatScreen"
          component={CreateChatScreen}
          options={{headerShown: false}}
        />
        <CreateNavStack.Screen
          name="CreateBeamScreen"
          component={CreateBeamScreen}
          options={{headerShown: false}}
        />
        <CreateNavStack.Screen
          name="CreateMediaMenuScreen"
          component={CreateMediaMenuScreen}
          options={{headerShown: false, presentation: 'modal'}}
        />
        <CreateNavStack.Screen
          name="CreateMarketListingScreen"
          component={CreateMarketListingScreen}
          options={{headerShown: false, presentation: 'modal'}}
        />
        <CreateNavStack.Screen
          name="MoreVideoToolsScreen"
          component={MoreVideoToolsScreen}
          options={{headerShown: false, presentation: 'modal'}}
        />
      </CreateNavStack.Navigator>
    </>
  );
}

export default CreateStack;
