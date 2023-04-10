import React, {useContext} from 'react';
import {Divider, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export interface CollapsedCaptionBarProps {
  expand: () => void;
}

export const CollapsedCaptionBar = ({expand}: CollapsedCaptionBarProps) => {
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
      <TouchableOpacity onPress={expand} style={{width: '100%', padding: 8}}>
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
            This is the caption for this thing. It doesn't have to be too small
            really. I will figure out how to handle this properly.
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
