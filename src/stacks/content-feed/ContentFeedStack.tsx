import React, {createContext, useContext, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from './FeedScreen';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import DimensionsStack from '../dimensions/DimensionsStack';
import {useNavigation} from '@react-navigation/native';
import ActivityStack from '../activity/ActivityStack';
import SearchStack from '../search/SearchStack';
import {DimensionMeta} from '../../services/content';

function ContentFeedHeader() {
  const {selectedDimension} = useContext(ContentFeedContext);
  const insets = useSafeAreaInsets();
  const {colors} = useContext(AppContext);
  const navigation = useNavigation();

  function gotoDimensionsPanel() {
    //@ts-ignore
    navigation.navigate('DimensionPanel');
  }

  function gotoSearchPanel() {
    //@ts-ignore
    navigation.navigate('SearchPanel');
  }

  function gotoActivityPanel() {
    //@ts-ignore
    navigation.navigate('ActivityPanel');
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
          icon="layers"
          iconColor={colors.bizarroTessarak}
          size={30}
          onPress={gotoDimensionsPanel}
        />
        <Text
          variant="headlineSmall"
          style={{color: colors.text, fontWeight: 'bold', flex: 1}}>
          {selectedDimension?.name}
        </Text>
        <IconButton
          icon="magnify"
          style={{marginRight: -10}}
          iconColor={colors.bizarroTessarak}
          size={25}
          onPress={gotoSearchPanel}
        />
        <IconButton
          icon="bell-outline"
          iconColor={colors.bizarroTessarak}
          size={25}
          onPress={gotoActivityPanel}
        />
      </View>
    </View>
  );
}

export type ContentFeedContextContainer = {
  selectedDimension: DimensionMeta | null;
  setSelectedDimension: (dimension: DimensionMeta) => void;
};

export const ContentFeedContext = createContext<ContentFeedContextContainer>({
  selectedDimension: undefined as any,
  setSelectedDimension: undefined as any,
});

const ContentFeedNavStack = createNativeStackNavigator();

function ContentFeedStack() {
  const [selectedDimension, setSelectedDimension] =
    useState<DimensionMeta | null>(null);

  return (
    <ContentFeedContext.Provider
      value={{selectedDimension, setSelectedDimension}}>
      <ContentFeedHeader />
      <ContentFeedNavStack.Navigator initialRouteName="FeedScreen">
        <ContentFeedNavStack.Screen
          name="FeedScreen"
          component={FeedScreen}
          options={{headerShown: false}}
        />
        <ContentFeedNavStack.Screen
          name="DimensionPanel"
          component={DimensionsStack}
          options={{headerShown: false, presentation: 'modal'}}
        />
        <ContentFeedNavStack.Screen
          name="SearchPanel"
          component={SearchStack}
          options={{headerShown: false, presentation: 'modal'}}
        />
        <ContentFeedNavStack.Screen
          name="ActivityPanel"
          component={ActivityStack}
          options={{headerShown: false, presentation: 'modal'}}
        />
      </ContentFeedNavStack.Navigator>
    </ContentFeedContext.Provider>
  );
}

export default ContentFeedStack;
