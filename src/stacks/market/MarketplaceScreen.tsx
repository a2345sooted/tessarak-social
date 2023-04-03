import React, {useContext, useState} from 'react';
import {Text, Searchbar, IconButton, MD3DarkTheme} from 'react-native-paper';
import {SafeScreen} from '@common';
import {AppContext} from '@app-ctx';
import {Keyboard, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const MarketplaceScreen = () => {
  const {colors} = useContext(AppContext);

  const [searchQuery, setSearchQuery] = useState('');
  const [gridView, setGridView] = useState(true);

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <SafeScreen>
      <View style={{flexDirection: 'row', paddingHorizontal: 8, paddingTop: 8}}>
        <Searchbar
          theme={MD3DarkTheme}
          inputStyle={{fontSize: 20}}
          style={{flex: 1, backgroundColor: colors.bg1}}
          iconColor={colors.tessarak}
          mode="bar"
          placeholder="Search the market..."
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
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
          onPress={() => {}}
        />
      </View>
      <TouchableWithoutFeedback
        style={{height: '100%'}}
        onPress={() => Keyboard.dismiss()}>
        <View
          style={{flex: 1, justifyContent: 'center', paddingHorizontal: 30}}>
          <Text
            variant="headlineSmall"
            style={{
              fontWeight: 'bold',
              color: colors.text,
              textAlign: 'center',
            }}>
            P2P Marketplace
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeScreen>
  );
};

export default MarketplaceScreen;
