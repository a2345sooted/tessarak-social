import React, {useContext} from 'react';
import {Divider, IconButton, List, Text} from 'react-native-paper';
import {SafeScreen} from '@common';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PulseIndicator} from 'react-native-indicators';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const MessagesScreen = () => {
  const {colors, user} = useContext(AppContext);

  const navigation = useNavigation();

  return (
    <SafeScreen>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flex: 1, marginLeft: 20}}>
          <View style={{flexDirection: 'row', marginBottom: -5}}>
            <Text
              variant="bodySmall"
              style={{
                fontWeight: 'bold',
                color: '#c66ef1',
              }}>
              End to End Encrypted
            </Text>
          </View>
          <Text
            variant="headlineSmall"
            style={{
              fontWeight: 'bold',
              color: colors.text,
            }}>
            Portals
          </Text>
        </View>
        <IconButton
          style={{marginLeft: -12}}
          icon="plus-box"
          iconColor={colors.tessarak}
          size={30}
          onPress={() => {
            //@ts-ignore
            navigation.navigate('Settings');
          }}
        />
      </View>
      <Divider />
      <ScrollView style={{marginTop: 12}}>
        <View style={{paddingLeft: 12}}>
          <List.Item
            descriptionStyle={{color: colors.text}}
            description="The last message or action here."
            titleStyle={{color: colors.text, fontWeight: 'bold'}}
            title="(636) 221-9345"
            right={() => <List.Icon color={colors.text} icon="arrow-right" />}
            left={() => (
              <List.Icon color={colors.text} icon="face-man-profile" />
            )}
          />
        </View>
        <Divider />
        <View style={{paddingLeft: 12}}>
          <List.Item
            descriptionStyle={{color: colors.text}}
            description="The last message or action here."
            titleStyle={{color: colors.text, fontWeight: 'bold'}}
            title="Group Chat"
            right={() => <List.Icon color={colors.text} icon="arrow-right" />}
            left={() => (
              <List.Icon color={colors.text} icon="face-man-profile" />
            )}
          />
        </View>
        <Divider />
        <View style={{paddingLeft: 12}}>
          <List.Item
            descriptionStyle={{color: colors.text}}
            description="The last message or action here."
            titleStyle={{color: colors.text, fontWeight: 'bold'}}
            title="Trivia Night"
            right={() => <List.Icon color={colors.text} icon="arrow-right" />}
            left={() => (
              <List.Icon color={colors.text} icon="face-man-profile" />
            )}
          />
        </View>
        <Divider />
        <View style={{paddingLeft: 12}}>
          <List.Item
            descriptionStyle={{color: colors.text}}
            description="The last message or action here."
            titleStyle={{color: colors.text, fontWeight: 'bold'}}
            title="Sarah's Bakery"
            right={() => <List.Icon color={colors.text} icon="arrow-right" />}
            left={() => (
              <List.Icon color={colors.text} icon="face-man-profile" />
            )}
          />
        </View>
        <Divider />
        <View style={{paddingLeft: 12}}>
          <List.Item
            descriptionStyle={{color: colors.text}}
            description="The last message or action here."
            titleStyle={{color: colors.text, fontWeight: 'bold'}}
            title="Jane Doe"
            right={() => <List.Icon color={colors.text} icon="arrow-right" />}
            left={() => (
              <List.Icon color={colors.text} icon="face-man-profile" />
            )}
          />
        </View>
        <Divider />
      </ScrollView>
    </SafeScreen>
  );
};

export default MessagesScreen;
