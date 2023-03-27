import React, {useContext, useRef} from 'react';
import {IconButton, Text, Avatar} from 'react-native-paper';
import {SafeScreen} from '@common';
import {AppContext} from '@app-ctx';
import {Alert, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';

const HomeScreen = () => {
  const {colors} = useContext(AppContext);

  const navigation = useNavigation();
  const soundActionSheet = useRef<ActionSheetRef>(null);
  const commentsActionSheet = useRef<ActionSheetRef>(null);

  return (
    <SafeScreen>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconButton
          icon="layers"
          iconColor={colors.tessarak}
          size={25}
          onPress={() => {
            //@ts-ignore
            navigation.navigate('Dimensions');
          }}
        />
        <Text
          variant="headlineSmall"
          style={{fontWeight: 'bold', color: colors.text, flex: 1}}>
          #tessarak-beta
        </Text>
        <IconButton
          icon="cube-send"
          style={{marginRight: -10}}
          iconColor={colors.tessarak}
          size={30}
          onPress={() => {
            //@ts-ignore
            navigation.navigate('Activity');
          }}
        />
        <IconButton
          icon="magnify"
          iconColor={colors.tessarak}
          size={30}
          onPress={() => {
            //@ts-ignore
            navigation.navigate('Search');
          }}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 30}}>
        <Text
          variant="headlineSmall"
          style={{fontWeight: 'bold', color: colors.text, textAlign: 'center'}}>
          TikTok like feed section based on which dimension you're in. Click up
          top to change dimensions.
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 12,
        }}>
        <IconButton
          icon="music"
          iconColor={colors.bizarroTessarak}
          size={25}
          onPress={() => soundActionSheet.current?.show()}
        />
        <IconButton
          icon="bookmark"
          iconColor={colors.bizarroTessarak}
          size={25}
          onPress={() => {
            Alert.alert('Bookmark');
          }}
        />
        <View style={{marginHorizontal: 12}}>
          <TouchableOpacity
            onPress={() => {
              //@ts-ignore
              navigation.navigate('User');
            }}>
            <Avatar.Text size={50} label="XD" />
          </TouchableOpacity>
        </View>
        <IconButton
          icon="comment"
          iconColor={colors.bizarroTessarak}
          size={25}
          onPress={() => commentsActionSheet.current?.show()}
        />
        <IconButton
          icon="heart"
          iconColor={colors.bizarroTessarak}
          size={25}
          onPress={() => {
            Alert.alert('Like');
          }}
        />
      </View>
      <ActionSheet
        ref={soundActionSheet}
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
          TikTok like sound section.
        </Text>
        <View style={{height: '60%'}} />
      </ActionSheet>
      <ActionSheet
        ref={commentsActionSheet}
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
          Comments section.
        </Text>
        <View style={{height: '60%'}} />
      </ActionSheet>
    </SafeScreen>
  );
};

export default HomeScreen;
