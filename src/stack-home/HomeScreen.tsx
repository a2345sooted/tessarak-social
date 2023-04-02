import React, {useContext, useRef} from 'react';
import {Avatar, IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {Alert, TouchableOpacity, View, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import PagerView from 'react-native-pager-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export interface TessarakContent {
  id: string;
  text: string;
}

const fakeContent: TessarakContent[] = [
  {id: '1', text: '#all-chrono: content 1'},
  {id: '2', text: '#all-chrono: content 2'},
];

type ContentSlideProps = {
  content: TessarakContent;
};
function ContentSlide({content}: ContentSlideProps): JSX.Element {
  const {colors} = useContext(AppContext);
  return (
    <View style={{paddingHorizontal: 30, flex: 1, justifyContent: 'center'}}>
      <Text
        variant="headlineSmall"
        style={{
          fontWeight: 'bold',
          color: colors.text,
          textAlign: 'center',
        }}>
        {content.text}
      </Text>
    </View>
  );
}

const HomeScreen = () => {
  const {colors} = useContext(AppContext);

  const insets = useSafeAreaInsets();

  const navigation = useNavigation();
  const soundActionSheet = useRef<ActionSheetRef>(null);
  const commentsActionSheet = useRef<ActionSheetRef>(null);
  const longPressActionSheet = useRef<ActionSheetRef>(null);
  const shareActionSheet = useRef<ActionSheetRef>(null);

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
      <AnimatedPagerView
        initialPage={0}
        style={{flex: 1, backgroundColor: colors.bg1}}
        orientation="vertical">
        {fakeContent.map(content => (
          <ContentSlide key={content.id} content={content} />
        ))}
      </AnimatedPagerView>
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
