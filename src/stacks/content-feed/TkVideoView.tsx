import React, {createRef, useContext, useEffect, useState} from 'react';
import {Alert, Dimensions, StyleSheet, View} from 'react-native';
import {AppContext} from '@app-ctx';
import {TkVideo} from '../../services/content';
import SideActionBar from './SideActionBar';
import VideoResource from 'react-native-video';
import {DimensionFeedContext} from './DimensionView';
import VideoPlayer from 'react-native-media-console';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {CollapsedCaptionBar} from './CollapsedCaptionBar';
import {ExpandedCaptionBar} from './ExpandedCaptionBar';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export interface TkVideoViewProps {
  content: TkVideo;
}

export function TkVideoView({content}: TkVideoViewProps): JSX.Element {
  const {colors} = useContext(AppContext);
  const videoPlayerRef = createRef<VideoResource>();
  const {selectedContentId} = useContext(DimensionFeedContext);

  const [manuallyPaused, setManuallyPaused] = useState(false);
  const [isCaptionExpanded, setIsCaptionExpanded] = useState(false);

  useEffect(() => {
    setManuallyPaused(false);
  }, [selectedContentId]);

  return (
    <View>
      <TouchableWithoutFeedback
        style={[styles.container, {backgroundColor: colors.bg1, zIndex: 100}]}
        onLongPress={() => Alert.alert('long press')}
        onPress={() => setManuallyPaused(!manuallyPaused)}>
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
        <SideActionBar />
        {isCaptionExpanded && <ExpandedCaptionBar />}
        {!isCaptionExpanded && (
          <CollapsedCaptionBar expand={() => setIsCaptionExpanded(true)} />
        )}
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight - 95,
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
