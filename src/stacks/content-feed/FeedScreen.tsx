import {ProgressBar, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {
  Alert,
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {getDimensions2} from '../../services/content';
import {DimensionView} from './DimensionView';
import {ContentFeedContext} from './ContentFeedStack';
import {TkNoteView} from './TkNoteView';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const FeedScreen = () => {
  const {setSelectedDimension} = useContext(ContentFeedContext);
  const {colors} = useContext(AppContext);

  const [dimensions, setDimensions] = useState<string[] | null>(null);
  const [isLoadingDimensions, setIsLoadingDimensions] = useState(true);
  const [errorLoadingDimensions, setErrorLoadingDimensions] =
    useState<any>(null);

  useEffect(() => {
    loadDimensions();
  }, []);

  async function loadDimensions() {
    setIsLoadingDimensions(true);
    setErrorLoadingDimensions(null);
    try {
      const result = await getDimensions2();
      setDimensions(result);
      setSelectedDimension(result[0]);
    } catch (error: any) {
      setErrorLoadingDimensions(error);
    } finally {
      setIsLoadingDimensions(false);
    }
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
          Teleporting Dimensions...
        </Text>
        <ProgressBar indeterminate color={colors.bizarroTessarak} />
      </View>
    );
  }

  function handleScrollEnd(
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ): void {
    const offset = event.nativeEvent.contentOffset;
    const pageIndex = Math.floor(offset.x / screenWidth);
    setSelectedDimension(dimensions![pageIndex]);
  }
  return (
    <>
      {isLoadingDimensions && loadingScreen()}
      {!isLoadingDimensions && !errorLoadingDimensions && (
        <View style={{height: screenHeight - 95, backgroundColor: colors.bg1}}>
          <FlatList
            horizontal
            keyExtractor={item => item}
            onMomentumScrollEnd={handleScrollEnd}
            style={{flex: 1, backgroundColor: colors.bg1}}
            data={dimensions}
            renderItem={({item}) => (
              <View style={{height: screenHeight - 95, width: screenWidth}}>
                <DimensionView name={item} />
              </View>
            )}
            pagingEnabled
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </>
  );
};

export default FeedScreen;
