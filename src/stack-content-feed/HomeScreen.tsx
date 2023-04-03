import {Avatar, IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {Alert, PanResponderGestureState, View} from 'react-native';
import React, {useContext, useRef} from 'react';
import PagerView from 'react-native-pager-view';
import GestureRecognizer from 'react-native-swipe-gestures';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';

const HomeScreen = () => {
  const {colors} = useContext(AppContext);

  const insets = useSafeAreaInsets();

  const navigation = useNavigation();
  const soundActionSheet = useRef<ActionSheetRef>(null);
  const commentsActionSheet = useRef<ActionSheetRef>(null);
  const longPressActionSheet = useRef<ActionSheetRef>(null);
  const shareActionSheet = useRef<ActionSheetRef>(null);

  const gestureConfig = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
    gestureIsClickThreshold: 5,
  };

  async function handleSwipeLeft(
    state: PanResponderGestureState,
  ): Promise<void> {}

  async function handleSwipeRight(
    state: PanResponderGestureState,
  ): Promise<void> {}

  function TopBar(): JSX.Element {
    return (
      <View
        style={{position: 'absolute', top: insets.top, left: 0, width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}>
          <IconButton
            icon="layers"
            iconColor="#c66ef1"
            size={25}
            onPress={() => {
              //@ts-ignore
              navigation.navigate('Dimensions');
            }}
          />
          <Text
            variant="headlineSmall"
            style={{fontWeight: 'bold', color: colors.text, flex: 1}}>
            #all-chrono
          </Text>
          <IconButton
            icon="cube-send"
            style={{marginRight: -10}}
            iconColor={colors.tessarak}
            size={30}
            onPress={() => {
              //@ts-ignore
              navigation.navigate('Activity');
            }}
          />
          <IconButton
            icon="magnify"
            iconColor={colors.tessarak}
            size={30}
            onPress={() => {
              //@ts-ignore
              navigation.navigate('Search');
            }}
          />
        </View>
      </View>
    );
  }

  function BottomBar(): JSX.Element {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 12,
            width: '100%',
          }}>
          <IconButton
            icon="music"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => soundActionSheet.current?.show()}
          />
          <IconButton
            icon="heart"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => {
              Alert.alert('Like');
            }}
          />
          <View style={{marginHorizontal: 12}}>
            <TouchableOpacity
              onPress={() => {
                //@ts-ignore
                navigation.navigate('User');
              }}>
              <Avatar.Text size={50} label="XD" />
            </TouchableOpacity>
          </View>
          <IconButton
            icon="comment"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => commentsActionSheet.current?.show()}
          />
          <IconButton
            icon="share"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => shareActionSheet.current?.show()}
          />
        </View>
      </View>
    );
  }

  return (
    <>
      <GestureRecognizer
        config={gestureConfig}
        onSwipeLeft={handleSwipeLeft}
        onSwipeRight={handleSwipeRight}
        style={{flex: 1, backgroundColor: colors.bg1}}>
        <PagerView initialPage={0} style={{flex: 1}} orientation="vertical">
          <View
            key="1"
            style={{
              flex: 1,
              justifyContent: 'center',
              // backgroundColor: colors.bg1,
            }}>
            <Text
              variant="bodyLarge"
              style={{
                fontWeight: 'bold',
                color: colors.text,
                textAlign: 'center',
              }}>
              Content 1
            </Text>
          </View>
          <View
            key="2"
            style={{
              flex: 1,
              justifyContent: 'center',
              // backgroundColor: colors.bg1,
            }}>
            <Text
              variant="bodyLarge"
              style={{
                fontWeight: 'bold',
                color: colors.text,
                textAlign: 'center',
              }}>
              Content 2
            </Text>
          </View>
        </PagerView>
      </GestureRecognizer>
      <TopBar />
      <BottomBar />
      <ActionSheet
        ref={soundActionSheet}
        containerStyle={{backgroundColor: colors.bg1}}
        elevation={12}>
        <Text
          variant="headlineSmall"
          style={{
            fontWeight: 'bold',
            color: colors.text,
            textAlign: 'center',
            marginTop: 30,
          }}>
          TikTok like sound section.
        </Text>
        <View style={{height: '60%'}} />
      </ActionSheet>
      <ActionSheet
        ref={commentsActionSheet}
        containerStyle={{backgroundColor: colors.bg1}}
        elevation={12}>
        <Text
          variant="headlineSmall"
          style={{
            fontWeight: 'bold',
            color: colors.text,
            textAlign: 'center',
            marginTop: 30,
          }}>
          Comments section.
        </Text>
        <View style={{height: '60%'}} />
      </ActionSheet>
      <ActionSheet
        ref={longPressActionSheet}
        containerStyle={{backgroundColor: colors.bg1}}
        elevation={12}>
        <Text
          variant="headlineSmall"
          style={{
            fontWeight: 'bold',
            color: colors.text,
            textAlign: 'center',
            marginTop: 30,
          }}>
          Video context section and other actions for the video, sorta like
          TikTok.
        </Text>
        <View style={{height: '40%'}} />
      </ActionSheet>
      <ActionSheet
        ref={shareActionSheet}
        containerStyle={{backgroundColor: colors.bg1}}
        elevation={12}>
        <Text
          variant="headlineSmall"
          style={{
            fontWeight: 'bold',
            color: colors.text,
            textAlign: 'center',
            marginTop: 30,
          }}>
          TikTok-like share section.
        </Text>
        <View style={{height: '45%'}} />
      </ActionSheet>
    </>
  );
};

export default HomeScreen;
