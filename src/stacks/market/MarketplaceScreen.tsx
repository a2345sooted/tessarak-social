import React, {useContext, useEffect, useRef, useState} from 'react';
import {Card, FAB, MD3DarkTheme, Searchbar, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MasonryList from 'reanimated-masonry-list';
import {getAspectRatio, tkDelay} from '@utils';
import PagerView from 'react-native-pager-view';
import MarketListing from './MarketListing';
import {getMockMarketListings, MarketListingData} from '@mock-data';
import {formatCurrency} from 'react-native-format-currency';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {FadeIn} from 'react-native-reanimated';

const MarketplaceScreen = () => {
  const {colors} = useContext(AppContext);
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [gridView, setGridView] = useState(true);
  const [showSearch, setShowSearch] = useState(gridView);

  const insets = useSafeAreaInsets();

  const [listings, setListings] = useState<MarketListingData[] | null>(null);
  const [isLoadingListings, setIsLoadingListings] = useState(false);
  const [errorLoadingListings, setErrorLoadingListings] = useState<any>(null);

  const searchInputRef = useRef<any>();
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  useEffect(() => {
    setShowSearch(gridView);
  }, [gridView]);

  async function loadListings() {
    setIsLoadingListings(true);
    try {
      const list = getMockMarketListings(30);
      setListings(list);
    } catch (error: any) {
      // todo
    } finally {
      setIsLoadingListings(false);
    }
  }

  function focusSearch() {
    searchInputRef.current?.focus();
  }

  const onChangeSearch = query => setSearchQuery(query);

  function gotoSettings() {
    //@ts-ignore
    navigation.navigate('MarketSettings');
  }

  function gotoMoreTools() {
    //@ts-ignore
    navigation.navigate('MarketMoreToolsScreen');
  }

  function gotoListingScreen() {
    //@ts-ignore
    navigation.navigate('MarketListingScreen');
  }

  function cancelSearch() {
    searchInputRef.current?.blur();
    if (!gridView) {
        setShowSearch(false);
    }
  }

  function header() {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 8,
          paddingTop: 8,
          elevation: 12,
          alignItems: 'center',
        }}>
        {showSearch && (
          <Searchbar
            traileringIcon={searchFocused ? 'close' : 'dots-horizontal-circle'}
            traileringIconColor={colors.bizarroTessarak}
            onTraileringIconPress={searchFocused ? cancelSearch : gotoMoreTools}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            ref={(input: any) => (searchInputRef.current = input)}
            showDivider={false}
            icon="tune"
            onIconPress={gotoSettings}
            theme={{...MD3DarkTheme, roundness: 1}}
            inputStyle={{fontSize: 18, fontWeight: 'bold'}}
            style={{
              flex: 1,
              backgroundColor: colors.bg1,
              opacity: showSearch ? 100 : 0,
            }}
            iconColor={colors.bizarroTessarak}
            mode="bar"
            placeholder="Search the market..."
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        )}
      </View>
    );
  }

  return (
    <View style={{backgroundColor: colors.bg1, flex: 1}}>
      <View
        style={{
          position: 'absolute',
          top: insets.top,
          left: 0,
          zIndex: 1000,
          width: '100%',
        }}>
        {header()}
      </View>
      {gridView && (
        <>
          {!listings && <View />}
          {listings && (
            <View style={{flex: 1}}>
              <MasonryList
                style={{paddingHorizontal: 4}}
                data={listings}
                keyExtractor={(item): string => item.key}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                renderItem={({item, i}) => {
                  const ad = item as MarketListingData;
                  return (
                    <TouchableOpacity key={i} onPress={gotoListingScreen}>
                      {i < 3 && <View style={{height: insets.top + 65}} />}
                      <View style={{padding: 2}}>
                        <Card>
                          <Card.Cover
                            theme={{roundness: 0}}
                            source={{uri: ad.imageUrl}}
                            style={{
                              height: undefined,
                              aspectRatio: getAspectRatio(
                                ad.imageWidth,
                                ad.imageHeight,
                              ),
                            }}
                          />
                          <View
                            style={{
                              backgroundColor: colors.dark,
                              paddingHorizontal: 8,
                              paddingVertical: 8,
                            }}>
                            <Text
                              variant="titleSmall"
                              style={{color: colors.text}}>
                              {`${
                                formatCurrency({
                                  amount: ad.price,
                                  code: 'USD',
                                })[0]
                              } - ${ad.title}`}
                            </Text>
                          </View>
                        </Card>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          )}
        </>
      )}
      {!gridView && (
        <>
          {!listings && <View />}
          {listings && (
            <PagerView
              style={{flex: 1, backgroundColor: colors.bg1}}
              initialPage={Math.floor(listings!.length / 2)}
              orientation="vertical">
              {listings!.map((listing: MarketListingData, index: number) => (
                <MarketListing key={listing.id} data={listing} index={index} />
              ))}
            </PagerView>
          )}
        </>
      )}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: 1000,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingHorizontal: 12,
            paddingVertical: 12,
          }}>
          {!gridView && (
            <Animated.View entering={FadeIn.duration(500)}>
              <FAB
                color={colors.dark}
                style={{
                  backgroundColor: colors.bizarroTessarak,
                }}
                theme={{roundness: 100}}
                size="small"
                icon="magnify"
                onPress={async () => {
                  setShowSearch(true);
                  await tkDelay(100);
                  focusSearch();
                }}
              />
            </Animated.View>
          )}
          <FAB
            color={colors.dark}
            style={{
              marginLeft: 10,
              backgroundColor: colors.bizarroTessarak,
            }}
            theme={{roundness: 100}}
            size="small"
            icon={gridView ? 'grid' : 'page-layout-body'}
            onPress={() => setGridView(!gridView)}
          />
        </View>
      </View>
    </View>
  );
};

export default MarketplaceScreen;
