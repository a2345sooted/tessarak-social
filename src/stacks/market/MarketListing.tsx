import React, {useContext} from 'react';
import {Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MarketListingData} from '@mock-data';

export interface MarketListingProps {
  data: MarketListingData;
  index: number;
}

function MarketListing({data, index}: MarketListingProps) {
  const {colors} = useContext(AppContext);
  const navigation = useNavigation();

  return (
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
        {`${data.price} - ${data.title}`}
      </Text>
    </View>
  );
}

export default MarketListing;
