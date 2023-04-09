import {ProgressBar, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {DimensionMeta, getDimensions} from '../../services/content';
import {DimensionView} from './DimensionView';
import {ContentFeedContext} from './ContentFeedStack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const FeedScreen = () => {
    const insets = useSafeAreaInsets();
  const {setSelectedDimension} = useContext(ContentFeedContext);
  const {colors} = useContext(AppContext);

  const [dimensions, setDimensions] = useState<DimensionMeta[] | null>(null);
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
      const result = await getDimensions();
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
          Teleporting...
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
        <View style={{height: screenHeight, backgroundColor: colors.bg1}}>
          <ScrollView
            onMomentumScrollEnd={handleScrollEnd}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={{flex: 1, backgroundColor: '#f10707'}}>
            {dimensions!.map(dimension => (
              <DimensionView key={dimension.id} meta={dimension} />
            ))}
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default FeedScreen;
