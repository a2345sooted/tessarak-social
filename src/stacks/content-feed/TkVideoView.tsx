import React, {useContext, useRef} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {AppContext} from '@app-ctx';
import {TkVideo} from '../../services/content';
import {Text} from 'react-native-paper';
import BottomActionBar from './BottomActionBar';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Video from 'react-native-video';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export interface TkVideoViewProps {
  content: TkVideo;
}

export function TkVideoView({content}: TkVideoViewProps): JSX.Element {
  const {colors} = useContext(AppContext);
  const insets = useSafeAreaInsets();
  const videoPlayerRef = useRef<any>();

  function onBuffer() {}
  function onVideoError() {}
  return (
    <View style={[styles.container, {backgroundColor: colors.bg1}]}>
      <BottomActionBar />
      {/*<Text style={styles.pageText}>Video</Text>*/}
      {/*<Image source={{uri: content.url}} style={{height: '100%'}} />*/}
      <Video
          resizeMode="cover"
          // paused={false}
        source={{
          // uri: 'https://assets.mixkit.co/videos/preview/mixkit-pov-of-a-basket-of-easter-eggs-48595-large.mp4',
          uri: 'https://assets.mixkit.co/videos/preview/mixkit-man-under-multicolored-lights-1237-large.mp4',
        }}
        ref={ref => {
          videoPlayerRef.current = ref;
        }}
        onBuffer={onBuffer}
        onError={onVideoError}
        style={{height: screenHeight - 95}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    paddingBottom: 95,
    width: screenWidth,
  },
  pageText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 200,
  },
});
