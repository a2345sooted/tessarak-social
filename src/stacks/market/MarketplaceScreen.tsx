import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Card,
  IconButton,
  MD3DarkTheme,
  Searchbar,
  Text,
} from 'react-native-paper';
import {SafeScreen} from '@common';
import {AppContext} from '@app-ctx';
import {Alert, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MasonryList from 'reanimated-masonry-list';
import {getAspectRatio} from '@utils';
import PagerView from 'react-native-pager-view';
import MarketListing from './MarketListing';
import {getMockMarketListings, MarketListingData} from '@mock-data';
import {formatCurrency} from 'react-native-format-currency';

function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

function getImages() {
  const images = [];
  for (let i = 0; i < 50; i++) {
    const height = randomNumber(200, 600);
    const width = randomNumber(200, 600);
    images.push({url: `https://fakeimg.pl/${height}x${width}/`, height, width});
  }
  return images;
}

const MarketplaceScreen = () => {
  const {colors} = useContext(AppContext);
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [gridView, setGridView] = useState(true);

  const [listings, setListings] = useState<MarketListingData[] | null>(null);
  const [isLoadingListings, setIsLoadingListings] = useState(false);
  const [errorLoadingListings, setErrorLoadingListings] = useState<any>(null);

  const searchInputRef = useRef<any>();
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  async function loadListings() {
    setIsLoadingListings(true);
    try {
      const list = await getMockMarketListings(30);
      setListings(list);
    } catch (error: any) {
      // todo
    } finally {
      setIsLoadingListings(false);
    }
  }

  const onChangeSearch = query => setSearchQuery(query);

  function gotoSettings() {
    //@ts-ignore
    navigation.navigate('MarketSettings');
  }

  function gotoCreateListing() {
    //@ts-ignore
    navigation.navigate('CreateListingScreen');
  }

  function cancelSearch() {
    searchInputRef.current?.blur();
  }

  function focusSearch() {
    searchInputRef.current?.focus();
  }

  return (
    <SafeScreen>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 8,
          paddingTop: 8,
          elevation: 12,
          alignItems: 'center',
        }}>
        <Searchbar
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          ref={(input: any) => (searchInputRef.current = input)}
          showDivider={false}
          onIconPress={focusSearch}
          theme={MD3DarkTheme}
          inputStyle={{fontSize: 20}}
          style={{flex: 1, backgroundColor: colors.bg1}}
          iconColor={colors.tessarak}
          mode="bar"
          placeholder="Search the market..."
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        {!searchFocused && (
          <>
            <IconButton
              style={{marginRight: -16}}
              icon={gridView ? 'grid' : 'grid-off'}
              iconColor={colors.bizarroTessarak}
              size={25}
              onPress={() => setGridView(!gridView)}
            />
            <IconButton
              style={{marginRight: -16}}
              icon="plus-box"
              iconColor={colors.bizarroTessarak}
              size={30}
              onPress={gotoCreateListing}
            />
            <IconButton
              icon={'store-cog'}
              iconColor={colors.bizarroTessarak}
              size={30}
              onPress={gotoSettings}
            />
          </>
        )}
        {searchFocused && (
          <IconButton
            icon="cancel"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={cancelSearch}
          />
        )}
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
                    <View key={i} style={{padding: 2}}>
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
    </SafeScreen>
  );
};

export default MarketplaceScreen;
