import React, {useContext} from 'react';
import {Divider, IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {Alert, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DimensionsScreen = () => {
  const {colors} = useContext(AppContext);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{backgroundColor: colors.bg1, flex: 1, paddingTop: insets.top}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconButton
          icon="close"
          iconColor={colors.bizarroTessarak}
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text
          variant="headlineSmall"
          style={{
            fontWeight: 'bold',
            color: colors.text,
            flex: 1,
          }}>
          Dimensions
        </Text>
        {/*<IconButton*/}
        {/*  icon="magnify"*/}
        {/*  iconColor={colors.bizarroTessarak}*/}
        {/*  size={30}*/}
        {/*  onPress={() => Alert.alert('Search dimension meta only, not content')}*/}
        {/*/>*/}
      </View>
      <Divider />
      <TouchableOpacity
        onPress={() => {
          //@ts-ignore
          navigation.navigate('ArrangeDimensionsScreen');
        }}
        style={{
          width: '100%',
          paddingVertical: 8,
          paddingHorizontal: 12,
          marginTop: 20,
        }}>
        {/*<Divider />*/}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 12,
          }}>
          <View style={{flex: 1}}>
            <Text
              variant="titleLarge"
              style={{color: colors.text, fontWeight: '900'}}>
              Discover
            </Text>
            <Text
              variant="titleSmall"
              style={{color: colors.text, fontWeight: '900'}}>
              Find new dimensions to explore.
            </Text>
          </View>
          <IconButton icon="arrow-right" iconColor={colors.text} size={30} />
        </View>
        <Divider />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          //@ts-ignore
          navigation.navigate('ArrangeDimensionsScreen');
        }}
        style={{
          width: '100%',
          paddingVertical: 8,
          paddingHorizontal: 12,
        }}>
        {/*<Divider />*/}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 12,
          }}>
          <View style={{flex: 1}}>
            <Text
              variant="titleLarge"
              style={{color: colors.text, fontWeight: '900'}}>
                Arrange
            </Text>
            <Text
              variant="titleSmall"
              style={{color: colors.text, fontWeight: '900'}}>
                Customize the order of the horizontal dimensions.
            </Text>
          </View>
          <IconButton icon="arrow-right" iconColor={colors.text} size={30} />
        </View>
        <Divider />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          //@ts-ignore
          navigation.navigate('ArrangeDimensionsScreen');
        }}
        style={{
          width: '100%',
          paddingVertical: 8,
          paddingHorizontal: 12,
        }}>
        {/*<Divider />*/}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 12,
          }}>
          <View style={{flex: 1}}>
            <Text
              variant="titleLarge"
              style={{color: colors.text, fontWeight: '900'}}>
              Markets
            </Text>
            <Text
              variant="titleSmall"
              style={{color: colors.text, fontWeight: '900'}}>
              Discover new market based dimensions.
            </Text>
          </View>
          <IconButton icon="arrow-right" iconColor={colors.text} size={30} />
        </View>
        <Divider />
      </TouchableOpacity>
    </View>
  );
};

export default DimensionsScreen;
