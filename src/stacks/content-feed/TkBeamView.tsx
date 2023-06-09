import React, {useContext, useRef} from 'react';
import {Alert, Dimensions, Image, StyleSheet, View} from 'react-native';
import {AppContext} from '@app-ctx';
import {TkBeam} from '../../services/content';
import {Avatar, IconButton, Text} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ActionSheetRef} from 'react-native-actions-sheet';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export interface TkBeamViewProps {
  content: TkBeam;
}

export function TkBeamView({content}: TkBeamViewProps): JSX.Element {
  const insets = useSafeAreaInsets();
  const {colors} = useContext(AppContext);
  const soundActionSheet = useRef<ActionSheetRef>(null);
  const commentsActionSheet = useRef<ActionSheetRef>(null);
  // const longPressActionSheet = useRef<ActionSheetRef>(null);
  const shareActionSheet = useRef<ActionSheetRef>(null);

  function BottomBar(): JSX.Element {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 95,
          left: 0,
          width: '100%',
          zIndex: 1000,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 12,
            width: '100%',
          }}>
          <IconButton
            icon="music"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => soundActionSheet.current?.show()}
          />
          <IconButton
            icon="heart"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => {
              Alert.alert('Like');
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
            icon="share"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => shareActionSheet.current?.show()}
          />
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: colors.bg1,
        height: screenHeight,
        width: screenWidth,
      }}>
      {BottomBar()}
      <Text style={styles.pageText}>Beam</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    height: screenHeight - 95,
  },
  pageText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 200,
  },
});
