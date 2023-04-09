import React, { createRef, useContext } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { AppContext } from '@app-ctx';
import { TkVideo } from '../../services/content';
import BottomActionBar from './BottomActionBar';
import VideoResource from 'react-native-video';
import { DimensionFeedContext } from './DimensionView';
import VideoPlayer from 'react-native-media-console';
import BottomCaptionBar from './BottomCaptionBar';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export interface TkVideoViewProps {
  content: TkVideo;
}

export function TkVideoView({content}: TkVideoViewProps): JSX.Element {
  const {colors} = useContext(AppContext);
  const videoPlayerRef = createRef<VideoResource>();
  const {selectedContentId} = useContext(DimensionFeedContext);

  return (
    <View style={[styles.container, {backgroundColor: colors.bg1}]}>
      <BottomActionBar />
      <BottomCaptionBar />
      <VideoPlayer
        onEnd={() => videoPlayerRef.current?.seek(0)}
        videoRef={videoPlayerRef}
        controlTimeoutDelay={3000}
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
