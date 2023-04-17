import React, {createContext, useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
} from 'react-native';
import {AppContext} from '@app-ctx';
import {TkNoteView} from './TkNoteView';
import {ContentFeedContext} from './ContentFeedStack';
import {ProgressBar, Text} from 'react-native-paper';
import {getDimContent} from '../../services/dimensions';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

export type DimensionFeedContextContainer = {
  selectedContentId: string | null;
};

export const DimensionFeedContext =
  createContext<DimensionFeedContextContainer>({
    selectedContentId: undefined as any,
  });

export interface DimensionViewProps {
  name: string;
}

export function DimensionView({name}: DimensionViewProps): JSX.Element {
  const {selectedDimension} = useContext(ContentFeedContext);
  const {colors} = useContext(AppContext);
  const [views, setViews] = useState<JSX.Element[] | null>(null);
  const [content, setContent] = useState<any[] | null>(null);
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [errorLoadingContent, setErrorLoadingContent] = useState<any>(null);

  const [selectedContentId, setSelectedContentId] = useState<string | null>(
    null,
  );

  useEffect(() => {
    // if (selectedDimension === name && !content) {
      loadContent();
    // }
  }, []);

  async function loadContent() {
    setIsLoadingContent(true);
    setErrorLoadingContent(null);
    try {
      const result = await getDimContent(name);
      setContent(result);
      setViews(result.map(c => <TkNoteView key={c.id} content={c} />));
      setSelectedContentId(result[0].id);
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

  function loadingScreen(): JSX.Element {
    return (
      <View
        style={{
          backgroundColor: colors.bg1,
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 30,
        }}>
        <Text
          variant="headlineSmall"
          style={{
            fontWeight: 'bold',
            color: colors.text,
            textAlign: 'center',
          }}>
          Teleporting Content...
        </Text>
        <ProgressBar indeterminate color={colors.bizarroTessarak} />
      </View>
    );
  }

  return (
    <DimensionFeedContext.Provider value={{selectedContentId}}>
      {!isLoadingContent &&
        !errorLoadingContent &&
        selectedDimension === name && (
          <ScrollView
            onMomentumScrollEnd={handleScrollEnd}
            pagingEnabled
            showsVerticalScrollIndicator={false}
            style={{flex: 1, backgroundColor: colors.bg1}}>
            {isLoadingContent && loadingScreen()}
            {/*{!isLoadingContent &&*/}
            {/*  content &&*/}
            {/*  content!.map(c => {*/}
            {/*    return <TkNoteView key={c.id} content={c} />;*/}
            {/*  })}*/}
            {!isLoadingContent && views && (
              <React.Fragment>{views}</React.Fragment>
            )}
          </ScrollView>
        )}
    </DimensionFeedContext.Provider>
  );
}
