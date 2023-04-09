import React, {createContext, useContext, useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';
import {AppContext} from '@app-ctx';
import {
  DimensionMeta,
  getContent,
  TkBeam,
  TkContent,
  TkPic,
  TkVideo,
} from '../../services/content';
import {TkPicView} from './TkPicView';
import {TkVideoView} from './TkVideoView';
import {TkBeamView} from './TkBeamView';

const {height: screenHeight} = Dimensions.get('window');

export type DimensionFeedContextContainer = {
  selectedContentId: string | null;
};

export const DimensionFeedContext =
  createContext<DimensionFeedContextContainer>({
    selectedContentId: undefined as any,
  });

export interface DimensionViewProps {
  meta: DimensionMeta;
}

export function DimensionView({meta}: DimensionViewProps): JSX.Element {
  const {colors} = useContext(AppContext);
  const [content, setContent] = useState<TkContent[] | null>(null);
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [errorLoadingContent, setErrorLoadingContent] = useState<any>(null);

  const [selectedContentId, setSelectedContentId] = useState<string | null>(
    null,
  );

  useEffect(() => {
    loadContent();
  }, []);

  async function loadContent() {
    setIsLoadingContent(true);
    setErrorLoadingContent(null);
    try {
      const result = await getContent();
      setContent(result.items);
      // setSelectedContentId(content![0].id);
    } catch (error: any) {
      setErrorLoadingContent(error);
    } finally {
      setIsLoadingContent(false);
    }
  }

  function handleScrollEnd(
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ): void {
    const offset = event.nativeEvent.contentOffset;
    const pageIndex = Math.floor(offset.y / (screenHeight - 95));
    setSelectedContentId(content![pageIndex].id);
  }

  return (
    <DimensionFeedContext.Provider value={{selectedContentId}}>
      {!isLoadingContent && !errorLoadingContent && (
        <ScrollView
          onMomentumScrollEnd={handleScrollEnd}
          pagingEnabled
          showsVerticalScrollIndicator={false}
          style={{flex: 1, backgroundColor: colors.bg1}}>
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
      )}
    </DimensionFeedContext.Provider>
  );
}
