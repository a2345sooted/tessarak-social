import React, {useContext} from 'react';
import {IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {Alert, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CreateScreen = () => {
  const {colors} = useContext(AppContext);

  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  const devices = useCameraDevices();
  const device = devices.back;

  function TopBar(): JSX.Element {
    return (
      <View
        style={{position: 'absolute', top: insets.top, left: 0, width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}>
          <IconButton
            icon="camera-flip"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => {
              Alert.alert('Flip Camera');
            }}
          />
          <IconButton
            icon="cube-scan"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => {
              Alert.alert('Filters');
            }}
          />
          <IconButton
            icon="timer"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => {
              Alert.alert('Start Timer');
            }}
          />
          <IconButton
            icon="music"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => {
              Alert.alert('Add Sound');
            }}
          />
          <IconButton
            icon="auto-fix"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => {
              Alert.alert('Retouch');
            }}
          />
          <IconButton
            icon="speedometer"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => {
              Alert.alert('Speed');
            }}
          />
          <IconButton
            icon="comment-question"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => {
              Alert.alert('Q & A');
            }}
          />
        </View>
      </View>
    );
  }

  function BottomBar(): JSX.Element {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <IconButton
            icon="triangle"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => {
              Alert.alert('Effects');
            }}
          />
          <IconButton
            icon="clipboard-clock"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => {
              Alert.alert('Video Duration');
            }}
          />
          <IconButton
            icon="video"
            iconColor={colors.bizarroTessarak}
            size={50}
            onPress={() => {
              Alert.alert('Record');
            }}
          />
          <IconButton
            icon="file-upload"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => {
              Alert.alert('Upload');
            }}
          />
          <IconButton
            icon="apps-box"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => {
              Alert.alert('Templates');
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <>
      {!device && (
        <View
          style={{flex: 1, justifyContent: 'center', paddingHorizontal: 30}}>
          <Text
            variant="headlineSmall"
            style={{
              fontWeight: 'bold',
              color: colors.text,
              textAlign: 'center',
            }}>
            TikTok like create section.
          </Text>
        </View>
      )}
      {device && (
        // <View style={{flex: 1}}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device!}
          isActive={true}
        />
        // </View>
      )}
      <TopBar />
      <BottomBar />
    </>
  );
};

export default CreateScreen;
