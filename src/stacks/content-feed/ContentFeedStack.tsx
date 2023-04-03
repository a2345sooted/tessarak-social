import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from './FeedScreen';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';

const ContentFeedNavStack = createNativeStackNavigator();

function ContentFeedStack() {
  const insets = useSafeAreaInsets();
  const {colors} = useContext(AppContext);
  return (
    <>
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
            iconColor={colors.tessarak}
            size={30}
            onPress={() => {}}
          />
          <Text
            variant="headlineSmall"
            style={{color: colors.text, fontWeight: 'bold', flex: 1}}>
            #all-chrono
          </Text>
          <IconButton
            icon="magnify"
            iconColor={colors.tessarak}
            size={30}
            onPress={() => {}}
          />
          <IconButton
            icon="bell-outline"
            iconColor={colors.tessarak}
            size={30}
            onPress={() => {}}
          />
        </View>
      </View>
      <ContentFeedNavStack.Navigator initialRouteName="FeedScreen">
        <ContentFeedNavStack.Screen
          name="FeedScreen"
          component={FeedScreen}
          options={{headerShown: false}}
        />
      </ContentFeedNavStack.Navigator>
    </>
  );
}

export default ContentFeedStack;
