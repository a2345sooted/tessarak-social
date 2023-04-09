import React, {createRef, useContext, useState} from 'react';
import {Alert, Dimensions, StyleSheet} from 'react-native';
import {AppContext} from '@app-ctx';
import {TkVideo} from '../../services/content';
import BottomActionBar from './BottomActionBar';
import VideoResource from 'react-native-video';
import {DimensionFeedContext} from './DimensionView';
import VideoPlayer from 'react-native-media-console';
import BottomCaptionBar from './BottomCaptionBar';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export interface TkVideoViewProps {
  content: TkVideo;
}

export function TkVideoView({content}: TkVideoViewProps): JSX.Element {
  const {colors} = useContext(AppContext);
  const videoPlayerRef = createRef<VideoResource>();
  const {selectedContentId} = useContext(DimensionFeedContext);

  const [manuallyPaused, setManuallyPaused] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback
        style={[styles.container, {backgroundColor: colors.bg1}]}
        onLongPress={() => Alert.alert('long press')}
        onPress={() => setManuallyPaused(!manuallyPaused)}>
        <BottomActionBar />
        <BottomCaptionBar />
        <VideoPlayer
          onEnd={() => videoPlayerRef.current?.seek(0)}
          videoRef={videoPlayerRef}
          controlTimeoutDelay={3000}
          preventsDisplaySleepDuringVideoPlayback
          disableFullscreen
          disableVolume
          disableBack
          disableSeekButtons
          resizeMode="cover"
          repeat={false}
          paused={!(selectedContentId === content.id) || manuallyPaused}
          style={{height: screenHeight - 95, zIndex: 1000}}
          source={{
            uri: content.videoUrl,
          }}
        />
      </TouchableWithoutFeedback>
    </>
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
