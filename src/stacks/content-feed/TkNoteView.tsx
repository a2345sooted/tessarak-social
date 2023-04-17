import React, {useContext, useRef, useState} from 'react';
import {Alert, Dimensions, Image, View} from 'react-native';
import {AppContext} from '@app-ctx';
import SideActionBar from './SideActionBar';
import {Divider, IconButton, Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RenderHTML from 'react-native-render-html';
import Animated, {FadeInUp, FadeOutUp} from 'react-native-reanimated';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {DateTime} from 'luxon';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import {tkDelay} from '@utils';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export interface TkNoteViewProps {
  content: any;
}

export function TkNoteView({content}: TkNoteViewProps): JSX.Element {
  const {colors} = useContext(AppContext);
  const insets = useSafeAreaInsets();

  const longPressActionSheet = useRef<ActionSheetRef>(null);

  const [showButtons, setShowButtons] = useState(true);

  const handleLinkPress = (
    event: any,
    url: string,
    htmlAttribs: any,
    target: any,
  ) => {
    Alert.alert('Go to link -- Not yet implemented.');
  };

  const rendererProps = {
    a: {
      onPress: handleLinkPress,
    },
  };

  function openLongPressActionSheet() {
    longPressActionSheet.current?.show();
  }

  function updateHideMode(shouldHide: boolean) {
    setShowButtons(!shouldHide);
  }

  return (
    <>
      <View
        style={{
          backgroundColor: colors.bg1,
          height: screenHeight - 95,
          width: screenWidth,
        }}>
        {showButtons && <SideActionBar source={content.account.avatar} />}
        {!showButtons && (
          <Animated.View
            style={{
              position: 'absolute',
              bottom: 12,
              right: 12,
              zIndex: 1000,
            }}>
            <TouchableOpacity
              onPress={() => {
                updateHideMode(false);
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <IconButton
                icon={'eye'}
                iconColor={colors.text}
                size={35}
                style={{
                  borderStyle: 'dotted',
                  borderWidth: 2,
                  borderColor: colors.text,
                }}
              />
            </TouchableOpacity>
          </Animated.View>
        )}
        <View
          style={{
            marginTop: insets.top + 50,
            paddingHorizontal: 16,
            flexDirection: 'row',
            alignItems: 'center',
            // backgroundColor: '#696868',
            paddingVertical: 4,
          }}>
          <RenderHTML
            source={{html: content.content}}
            contentWidth={screenWidth}
            baseStyle={{
              color: colors.text,
              fontWeight: '600',
              fontSize: 16,
              zIndex: 1000,
            }}
            tagsStyles={{
              a: {color: colors.bizarroTessarak, textDecorationLine: 'none'},
            }}
            renderersProps={rendererProps}
          />
        </View>
        {content.media_attachments.length > 0 &&
          content.media_attachments[0].type.startsWith('image') && (
            <TouchableWithoutFeedback
                onPress={() => Alert.alert('full screen image')}
              onLongPress={openLongPressActionSheet}
              style={{
                paddingHorizontal: 8,
                paddingBottom: 40,
                paddingTop: 12,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Image
                source={{uri: content.media_attachments[0].url}}
                style={{
                  borderRadius: 2,
                  width:
                    content.media_attachments[0].meta.original.aspect >= 1
                      ? '100%'
                      : undefined,
                  height:
                    content.media_attachments[0].meta.original.aspect < 1
                      ? '70%'
                      : undefined,
                  aspectRatio:
                    content.media_attachments[0].meta.original.aspect,
                }}
              />
            </TouchableWithoutFeedback>
          )}
        <TouchableWithoutFeedback
          style={{height: '100%'}}
          onLongPress={openLongPressActionSheet}
        />
        {showButtons && (
          <Animated.View
            entering={FadeInUp.duration(400)}
            exiting={FadeOutUp.duration(400)}
            style={{
              position: 'absolute',
              bottom: 25,
              left: 15,
              width: '70%',
              zIndex: 1000,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              borderRadius: 2,
            }}>
            <TouchableOpacity
              style={{width: '100%', padding: 8}}
              onPress={() =>
                Alert.alert('Expand info -- Not yet implemented.')
              }>
              <View>
                <Text
                  variant="labelLarge"
                  style={{fontWeight: 'bold', color: colors.text}}>
                  @{content.account.acct}
                </Text>
              </View>
              <Divider style={{marginVertical: 8}} />
              <View>
                <Text variant="labelMedium" style={{color: colors.text}}>
                  {DateTime.fromISO(content.created_at).toFormat('f')}
                </Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
      <ActionSheet
        ref={longPressActionSheet}
        containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}
        elevation={12}>
        <View
          style={{
            paddingVertical: 8,
            paddingHorizontal: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={async () => {
              updateHideMode(true);
              await tkDelay(250);
              longPressActionSheet.current?.hide();
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 8,
              }}>
              <IconButton
                icon={'eye-off'}
                iconColor={colors.text}
                size={35}
                style={{
                  borderStyle: 'dotted',
                  borderWidth: 2,
                  borderColor: colors.text,
                }}
              />
            </View>
            <Text
              variant="labelSmall"
              style={{
                color: colors.text,
                fontWeight: 'bold',
                marginTop: -12,
                textAlign: 'center',
              }}>
              Hide Buttons
            </Text>
          </TouchableOpacity>
        </View>
        <Divider />
        {/*<Text*/}
        {/*  variant="headlineSmall"*/}
        {/*  style={{*/}
        {/*    fontWeight: 'bold',*/}
        {/*    color: colors.text,*/}
        {/*    textAlign: 'center',*/}
        {/*    marginTop: 30,*/}
        {/*  }}>*/}
        {/*  TikTok-like share section.*/}
        {/*</Text>*/}
        <View style={{height: '45%'}} />
      </ActionSheet>
    </>
  );
}
