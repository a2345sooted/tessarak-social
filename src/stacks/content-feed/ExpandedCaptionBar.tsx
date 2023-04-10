import React, {useContext} from 'react';
import {Divider, IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  FadeInDown,
  FadeOutDown,
} from 'react-native-reanimated';

export interface ExpandedCaptionBarProps {
  collapse: () => void;
}

export const ExpandedCaptionBar = ({collapse}: ExpandedCaptionBarProps) => {
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
      <Animated.View
        entering={FadeInDown.duration(400)}
        exiting={FadeOutDown.duration(400)}
        style={{
          width: '100%',
          padding: 8,
          backgroundColor: 'rgba(80,79,79,0.8)',
          borderRadius: 2,
        }}>
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
            really. I will figure out how to handle this properly. This is the
            caption for this thing. It doesn't have to be too small really. I
            will figure out how to handle this properly. This is the caption for
            this thing. It doesn't have to be too small really. I will figure
            out how to handle this properly.
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text
            variant="labelMedium"
            style={{color: colors.text, fontWeight: '900'}}>
            #tagOne #tagTwo #tagThree
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text
            variant="labelMedium"
            style={{color: colors.text, fontWeight: '900'}}>
            @personOne@domain.com @personTwo@domain.com @personThree@domain.com
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text
            variant="labelMedium"
            style={{color: colors.text, fontWeight: '900'}}>
            stitch of: [link to orig]
          </Text>
        </View>
        <View
          style={{
            marginTop: 8,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity onPress={collapse}>
            <IconButton icon={'close'} iconColor={colors.text} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};
