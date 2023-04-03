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

function getImages() {
  const images = [];
  for (let i = 0; i < 100; i++) {
    images.push({url: 'https://fakeimg.pl/300x300/', height: 300, width: 300});
  }
  return images;
}

// function ListingCard(): JSX.Element {
//   return (
//     <Card>
//       <Card.Content>
//         <Text>item</Text>
//         <Text>item</Text>
//         <Text>item</Text>
//       </Card.Content>
//     </Card>
//   );
// }

const MarketplaceScreen = () => {
  const {colors} = useContext(AppContext);
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [gridView, setGridView] = useState(true);
  const [images, setImages] = useState(getImages());

  const searchInputRef = useRef<any>();
  const [searchFocused, setSearchFocused] = useState(false);

  const onChangeSearch = query => setSearchQuery(query);

  function gotoSettings() {
    //@ts-ignore
    navigation.navigate('MarketSettings');
  }

  function cancelSearch() {
    searchInputRef.current?.blur();
  }

  return (
    <SafeScreen>
      <View style={{flexDirection: 'row', paddingHorizontal: 8, paddingTop: 8}}>
        <Searchbar
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          ref={(input: any) => (searchInputRef.current = input)}
          showDivider={false}
          onIconPress={() =>
            Alert.alert('this needs to focus the search input.')
          }
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
              style={{marginRight: -10}}
              icon={gridView ? 'grid' : 'grid-off'}
              iconColor={colors.bizarroTessarak}
              size={25}
              onPress={() => setGridView(!gridView)}
            />
            <IconButton
              icon={'cog'}
              iconColor={colors.bizarroTessarak}
              size={25}
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
        <View style={{flex: 1}}>
          <MasonryList
            style={{paddingHorizontal: 4, color: colors.text}}
            data={images}
            keyExtractor={(item): string => item.key}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            renderItem={({item}: any) => (
              <View style={{padding: 2}}>
                <Card>
                  <Card.Cover
                    source={{uri: item.url}}
                    style={{
                      height: undefined,
                      aspectRatio: getAspectRatio(item.width, item.height),
                    }}
                  />
                </Card>
              </View>
            )}
          />
        </View>
      )}
      {!gridView && (
        <PagerView
          style={{flex: 1, backgroundColor: colors.bg1}}
          initialPage={Math.floor(images.length / 2)}
          orientation="vertical">
          {images.map((image: any, index: number) => (
            <View
              key={index}
              style={{
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
                Listing
              </Text>
            </View>
          ))}
        </PagerView>
      )}
    </SafeScreen>
  );
};

export default MarketplaceScreen;
