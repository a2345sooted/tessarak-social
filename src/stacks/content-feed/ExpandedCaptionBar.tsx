import React, {useContext} from 'react';
import {Divider, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const ExpandedCaptionBar = () => {
  const {colors} = useContext(AppContext);
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 25,
        left: 15,
        width: '70%',
        zIndex: 1000,
      }}>
      <TouchableOpacity onPress={() => {}} style={{width: '100%', padding: 8}}>
        <View>
          <Text
            variant="labelLarge"
            style={{fontWeight: 'bold', color: colors.text}}>
            @geo_stokes@tessarak.org
          </Text>
        </View>
        <Divider style={{marginVertical: 8}} />
        <View>
          <Text variant="labelMedium" style={{color: colors.text}}>
            EXPANDED
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
