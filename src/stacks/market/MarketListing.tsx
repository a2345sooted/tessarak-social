import React, {useContext, useRef, useState} from 'react';
import {Button, IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MarketListingData} from '@mock-data';
import {formatCurrency} from 'react-native-format-currency';
import {tkDelay} from '@utils';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {triggerImpactLight} from '@haptic';

export interface MarketListingProps {
  data: MarketListingData;
  index: number;
}

function MarketListing({data, index}: MarketListingProps) {
  const {colors} = useContext(AppContext);
  const navigation = useNavigation();

  const shareActionSheet = useRef<ActionSheetRef>(null);

  const [bookmarked, setBookmarked] = useState(false);

  async function createPortal() {
    // navigation.goBack();
    await tkDelay(0);
    //@ts-ignore
    navigation.navigate('CreatePortalWithSellerScreen');
  }

  async function reportListing() {
    // navigation.goBack();
    await tkDelay(0);
    //@ts-ignore
    navigation.navigate('ReportListingScreen');
  }

  function showShareActionSheet() {
    shareActionSheet.current?.show();
  }

  function handleBookmarkChange() {
    triggerImpactLight();
    setBookmarked(!bookmarked);
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
        <View style={{marginRight: -20}}>
          <BouncyCheckbox
            bouncinessIn={25}
            bouncinessOut={25}
            innerIconStyle={{backgroundColor: colors.bg1}}
            size={35}
            fillColor={colors.bg1}
            unfillColor={colors.bg1}
            textComponent={undefined}
            isChecked={bookmarked}
            onPress={handleBookmarkChange}
            iconComponent={
              <Icon
                name="bookmark"
                size={30}
                color={bookmarked ? '#f2fa04' : colors.bizarroTessarak}
              />
            }
          />
        </View>
        <IconButton
          style={{marginRight: -10}}
          icon="alert"
          iconColor={colors.bizarroTessarak}
          size={30}
          onPress={reportListing}
        />
        {/*<IconButton*/}
        {/*  style={{marginRight: -10}}*/}
        {/*  icon="bookmark"*/}
        {/*  iconColor={colors.bizarroTessarak}*/}
        {/*  size={30}*/}
        {/*  onPress={() => {}}*/}
        {/*/>*/}
        <IconButton
          style={{marginRight: -10}}
          icon="share"
          iconColor={colors.bizarroTessarak}
          size={30}
          onPress={showShareActionSheet}
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
      <ActionSheet
        ref={shareActionSheet}
        containerStyle={{backgroundColor: colors.bg1}}
        elevation={12}>
        <Text
          variant="headlineSmall"
          style={{
            fontWeight: 'bold',
            color: colors.text,
            textAlign: 'center',
            marginTop: 30,
          }}>
          Share Listing Section
        </Text>
        <View style={{height: '55%'}} />
      </ActionSheet>
    </View>
  );
}

export default MarketListing;
