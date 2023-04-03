import React, {useContext, useEffect} from 'react';
import {IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {Alert, StyleSheet, View} from 'react-native';
import {hasAccess, requestCameraAccess, requestMicAccess} from '@permissions';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const CreateVideoScreen = () => {
  const {colors} = useContext(AppContext);

  const navigation = useNavigation();

  useEffect(() => {
    acquirePermissions();
  }, []);

  async function acquirePermissions() {
    const hasCameraAccess = hasAccess(await requestCameraAccess());
    const hasMicAccess = hasAccess(await requestMicAccess());
    if (!hasCameraAccess || !hasMicAccess) {
      // todo ... they can't really continue here
    }
  }

  const insets = useSafeAreaInsets();

  const devices = useCameraDevices();
  const device = devices.back;

  function TopBar(): JSX.Element {
    return (
      <View
        style={{
          position: 'absolute',
          top: insets.top * 2,
          left: 0,
          width: '100%',
        }}>
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
            size={30}
            onPress={() => {
              Alert.alert('Effects');
            }}
          />
          <IconButton
            icon="clipboard-clock"
            iconColor={colors.bizarroTessarak}
            size={30}
            onPress={() => {
              Alert.alert('Video Duration');
            }}
          />
          <IconButton
            icon="video"
            iconColor={colors.bizarroTessarak}
            size={70}
            onPress={() => {
              Alert.alert('Record');
            }}
          />
          <IconButton
            icon="file-upload"
            iconColor={colors.bizarroTessarak}
            size={30}
            onPress={() => {
              Alert.alert('Upload');
            }}
          />
          <IconButton
            icon="apps-box"
            iconColor={colors.bizarroTessarak}
            size={30}
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
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 30,
            backgroundColor: colors.bg1,
          }}>
          <Text
            variant="headlineSmall"
            style={{
              fontWeight: 'bold',
              color: colors.text,
              textAlign: 'center',
            }}>
            No Camera.
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

export default CreateVideoScreen;
