import React, {useContext} from 'react';
import {Divider, IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {Alert, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MarketListing from './MarketListing';
import {getSingleMarketListing} from '@mock-data';

const MarketListingScreen = () => {
  const {colors} = useContext(AppContext);
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: colors.bg1}}>
      <MarketListing key={1} data={getSingleMarketListing()} index={0} />
      <IconButton
        style={{position: 'absolute', top: 0, left: 0, zIndex: 100}}
        icon="close"
        iconColor={colors.bizarroTessarak}
        size={30}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default MarketListingScreen;
