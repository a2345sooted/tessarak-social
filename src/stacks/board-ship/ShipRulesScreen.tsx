import React, {useContext, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Divider, IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {useNavigation} from '@react-navigation/native';
import {SafeScreen} from '@common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StartFooter} from '../start/IntroScreen';
import {NBZ} from './mock-data';

function getNBZ() {
  const ship = NBZ;
  ship.rules.push({title: 'Do I have to agree to board?', paragraphs: ['Yes']});
  return ship;
}

const ShipRulesScreen = () => {
  const {colors} = useContext(AppContext);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const [ship, setShip] = useState(getNBZ());

  return (
    <SafeScreen>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconButton
            icon="close"
            iconColor={colors.text}
            size={30}
            onPress={() => navigation.goBack()}
          />
          <View>
            <View
              style={{
                flexDirection: 'row',
                paddingRight: 20,
              }}>
              <Text
                variant="titleMedium"
                style={{fontWeight: '900', color: colors.bizarroTessarak}}>
                RULES OF
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 20,
                paddingRight: 20,
              }}>
              <Text
                variant="headlineSmall"
                style={{
                  fontWeight: 'bold',
                  color: colors.text,
                }}>
                {ship.name}
              </Text>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginBottom: 20}}>
          <Divider />
        </View>

        <ScrollView
          style={{paddingHorizontal: 20, paddingBottom: insets.bottom + 20}}>
          {ship.rules.map((rule, index) => (
            <View key={`rule-${index}`}>
              <View>
                <Text
                  variant="titleMedium"
                  style={{
                    fontWeight: 'bold',
                    color: '#c66ef1',
                  }}>
                  {rule.title}
                </Text>
              </View>
              {rule.paragraphs.map((paragraph, pIndex) => (
                <View key={`paragraph-${pIndex}`} style={{marginBottom: 20}}>
                  <Text
                    variant="titleMedium"
                    style={{
                      fontWeight: 'bold',
                      color: colors.text,
                    }}>
                    {paragraph}
                  </Text>
                </View>
              ))}
            </View>
          ))}

          <View
            style={{marginTop: 20, paddingHorizontal: 20, marginBottom: 50}}>
            <Button
              uppercase
              labelStyle={{color: colors.text, fontWeight: 'bold'}}
              buttonColor={colors.tessarak}
              theme={{roundness: 1}}
              onPress={() => {
                //@ts-ignore
                navigation.navigate('GetPhoneNumber');
              }}>
              I agree
            </Button>
          </View>
        </ScrollView>
        <View style={{paddingHorizontal: 20, marginBottom: 20}}>
          <Divider />
        </View>
        <View style={{flex: 1}} />
        <View style={{}}>
          <StartFooter />
        </View>
      </View>
    </SafeScreen>
  );
};

export default ShipRulesScreen;
