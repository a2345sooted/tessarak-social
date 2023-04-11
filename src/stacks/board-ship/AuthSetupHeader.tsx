import React, {useContext} from 'react';
import {BoardShipContext} from './BoardShipStack';
import {AppContext} from '@app-ctx';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';

export interface AuthHeaderProps {}

export function AuthHeader({}: AuthHeaderProps): JSX.Element {
  const {ship} = useContext(BoardShipContext);
  const {colors} = useContext(AppContext);
  const navigation = useNavigation();
  return (
    <>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconButton
          icon="close"
          iconColor={colors.text}
          size={30}
          onPress={() => navigation.goBack()}
          style={{flex: 1}}
        />
        <IconButton
          icon="bell"
          iconColor={'#bb9604'}
          size={60}
          style={{flex: 2}}
        />
        <View style={{flex: 1}} />
      </View>
      <View
        style={{
          paddingHorizontal: 20,
        }}>
        <Text
          variant="headlineSmall"
          style={{fontWeight: 'bold', color: colors.text, textAlign: 'center'}}>
          {ship?.name}
        </Text>
        <Text
          variant="titleSmall"
          style={{color: colors.text, textAlign: 'center'}}>
          {ship?.domain}
        </Text>
      </View>
    </>
  );
}
