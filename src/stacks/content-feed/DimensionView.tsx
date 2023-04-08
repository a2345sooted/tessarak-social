import React, {useContext, useEffect, useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {AppContext} from '@app-ctx';
import {
  DimensionMeta,
  FeedContent,
  getContent,
  TkBeam,
  TkPic,
  TkVideo,
} from '../../services/content';
import {Text} from 'react-native-paper';
import {TkPicView} from './TkPicView';
import {TkVideoView} from './TkVideoView';
import {TkBeamView} from './TkBeamView';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export interface DimensionViewProps {
  meta: DimensionMeta;
}

export function DimensionView({meta}: DimensionViewProps): JSX.Element {
  const {colors} = useContext(AppContext);
  const [content, setContent] = useState<FeedContent[] | null>(null);
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [errorLoadingContent, setErrorLoadingContent] = useState<any>(null);

  useEffect(() => {
    loadContent();
  }, []);

  async function loadContent() {
    setIsLoadingContent(true);
    setErrorLoadingContent(null);
    try {
      const result = await getContent();
      setContent(result.items);
    } catch (error: any) {
      setErrorLoadingContent(error);
    } finally {
      setIsLoadingContent(false);
    }
  }

  return (
    <>
      {!isLoadingContent && !errorLoadingContent && (
        <View style={[styles.horizontalPage, {backgroundColor: colors.bg1}]}>
          <ScrollView
            pagingEnabled
            showsVerticalScrollIndicator={false}
            style={styles.verticalScrollView}>
            {content!.map(c => {
              switch (c.type) {
                case 'pic':
                  return <TkPicView key={c.id} content={c as TkPic} />;
                case 'video':
                  return <TkVideoView key={c.id} content={c as TkVideo} />;
                case 'beam':
                  return <TkBeamView key={c.id} content={c as TkBeam} />;
              }
            })}
          </ScrollView>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalScrollView: {
    flex: 1,
  },
  horizontalPage: {
    width: screenWidth,
    height: screenHeight,
  },
  verticalScrollView: {
    flex: 1,
  },
});
