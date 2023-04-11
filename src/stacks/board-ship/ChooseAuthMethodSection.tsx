import React, {useContext} from 'react';
import {AppContext} from '@app-ctx';
import {Divider, IconButton, List, Text} from 'react-native-paper';
import Animated, {
  FadeInDown,
  FadeInRight,
  FadeOutDown,
  FadeOutRight,
} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ShipAllowedAuthMethod} from './mock-data';
import {View} from 'react-native';

export interface ChooseAuthMethodSectionProps {
  nextFn: (method: ShipAllowedAuthMethod) => void;
  prevFn: () => void;
}

export function ChooseAuthMethodSection({
  nextFn,
  prevFn,
}: ChooseAuthMethodSectionProps): JSX.Element {
  const {colors} = useContext(AppContext);
  return (
    <Animated.View
      style={{paddingHorizontal: 30}}
      entering={FadeInRight.duration(600)}
      exiting={FadeOutRight.duration(600)}>
      <View
        style={{
          marginTop: 12,
          paddingHorizontal: 20,
          marginBottom: 20,
        }}>
        <Text
          variant="titleMedium"
          style={{
            color: colors.bizarroTessarak,
            textAlign: 'center',
            fontWeight: '900',
          }}>
          How do you want to login?
        </Text>
      </View>
      <TouchableOpacity onPress={() => nextFn('sms')}>
        <List.Item
          titleStyle={{color: colors.text, fontWeight: 'bold'}}
          title="SMS Code"
          descriptionStyle={{color: colors.text}}
          description="We will text you a code."
          left={() => <List.Icon color={'#c66ef1'} icon="cellphone" />}
          right={() => <List.Icon color={colors.text} icon="arrow-right" />}
        />
      </TouchableOpacity>
      <Divider style={{marginVertical: 8}} />
      <TouchableOpacity onPress={() => nextFn('email')}>
        <List.Item
          titleStyle={{color: colors.text, fontWeight: 'bold'}}
          title="Email Code"
          descriptionStyle={{color: colors.text}}
          description="We will email you a code."
          left={() => <List.Icon color={'#c66ef1'} icon="email-outline" />}
          right={() => <List.Icon color={colors.text} icon="arrow-right" />}
        />
      </TouchableOpacity>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 40}}>
        <IconButton
          onPress={prevFn}
          icon="arrow-left"
          iconColor={colors.text}
          size={30}
          mode="outlined"
        />
      </View>
    </Animated.View>
  );
}
