import React, { createRef, useContext, useRef } from 'react';
import {Alert, Dimensions, StyleSheet, View} from 'react-native';
import {AppContext} from '@app-ctx';
import {TkVideo} from '../../services/content';
import BottomActionBar from './BottomActionBar';
import Video from 'react-native-video';
import {DimensionFeedContext} from './DimensionView';
import VideoPlayer from 'react-native-media-console';
import {TouchableOpacity} from 'react-native-gesture-handler';
import VideoResource from 'react-native-video';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export interface TkVideoViewProps {
  content: TkVideo;
}

export function TkVideoView({content}: TkVideoViewProps): JSX.Element {
  const {colors} = useContext(AppContext);
  const videoPlayerRef = createRef<VideoResource>();
  const {selectedContentId} = useContext(DimensionFeedContext);

  function onBuffer() {}
  function onVideoError() {}

  return (
    <View style={[styles.container, {backgroundColor: colors.bg1}]}>
      <BottomActionBar />
      <VideoPlayer
        onEnd={() => videoPlayerRef.current?.seek(0)}
        videoRef={videoPlayerRef}
        controlTimeoutDelay={1500}
        disableFullscreen
        disableVolume
        disableBack
        disableSeekButtons
        resizeMode="cover"
        repeat={false}
        paused={!(selectedContentId === content.id)}
        style={{height: screenHeight - 95, zIndex: 1000}}
        source={{
          uri: content.videoUrl,
        }}
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
