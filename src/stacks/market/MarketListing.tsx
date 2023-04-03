import React, {useContext} from 'react';
import {Button, IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MarketListingData} from '@mock-data';
import {formatCurrency} from 'react-native-format-currency';
import {tkDelay} from '@utils';
import {triggerImpactMedium} from '@haptic';

export interface MarketListingProps {
  data: MarketListingData;
  index: number;
}

function MarketListing({data, index}: MarketListingProps) {
  const {colors} = useContext(AppContext);
  const navigation = useNavigation();

  async function createPortal() {
    // navigation.goBack();
    await tkDelay(0);
    //@ts-ignore
    navigation.navigate('CreatePortalWithSellerScreen');
  }

  return (
    <View
      key={index}
      style={{
        flex: 1,
      }}>
      <Image style={{height: '50%'}} source={{uri: data.imageUrl}} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 12,
          paddingTop: 16,
        }}>
        <Text
          variant="headlineSmall"
          style={{
            flex: 1,
            fontWeight: 'bold',
            color: colors.text,
            marginRight: 20,
            minWidth: 100,
          }}>
          {
            formatCurrency({
              amount: data.price,
              code: 'USD',
            })[0]
          }
        </Text>
        <IconButton
          style={{marginRight: -10}}
          icon="alert"
          iconColor={colors.bizarroTessarak}
          size={30}
          onPress={() => {}}
        />
        <IconButton
          style={{marginRight: -10}}
          icon="bookmark"
          iconColor={colors.bizarroTessarak}
          size={30}
          onPress={() => {}}
        />
        <IconButton
          style={{marginRight: -10}}
          icon="share"
          iconColor={colors.bizarroTessarak}
          size={30}
          onPress={() => {}}
        />
        <IconButton
          icon="message-text"
          iconColor={colors.bizarroTessarak}
          size={30}
          onPress={createPortal}
        />
        {/*<Button style={{flex: 1}} mode="contained" onPress={createPortal}>*/}
        {/*  Create Portal w/ Seller*/}
        {/*</Button>*/}
      </View>
      <View />
      <View style={{paddingHorizontal: 12, marginTop: 8}}>
        <Text
          variant="headlineSmall"
          style={{
            fontWeight: 'bold',
            color: colors.text,
          }}>
          {data.title}
        </Text>
      </View>
      <View style={{paddingHorizontal: 12, marginTop: 12}}>
        <Text
          variant="titleMedium"
          style={{
            fontWeight: 'bold',
            color: '#d5d4d4',
          }}>
          {data.description}
        </Text>
      </View>
    </View>
  );
}

export default MarketListing;
