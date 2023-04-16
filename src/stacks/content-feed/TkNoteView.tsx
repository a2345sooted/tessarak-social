import React, {useContext} from 'react';
import {Alert, Dimensions, Image, View} from 'react-native';
import {AppContext} from '@app-ctx';
import SideActionBar from './SideActionBar';
import {Divider, Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RenderHTML from 'react-native-render-html';
import {getAspectRatio} from '@utils';

import {Linking} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export interface TkNoteViewProps {
  content: any;
}

// function generateUsername(actorId: string): string {
//   const splitId = actorId.split('/');
//   let domain: string;
//   let username: string;
//   for (let i = 0; i < splitId.length; i++) {
//     const v = splitId[i];
//     if (v === 'users') {
//       domain = splitId[i - 1];
//       username = splitId[i + 1];
//       break;
//     }
//   }
//   if (!domain! || !username!) {
//     throw new Error('invalid id');
//   }
//   return `@${username}@${domain}`;
// }

export function TkNoteView({content}: TkNoteViewProps): JSX.Element {
  const {colors} = useContext(AppContext);
  const insets = useSafeAreaInsets();

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

  return (
    <View
      style={{
        backgroundColor: colors.bg1,
        height: screenHeight - 95,
        width: screenWidth,
      }}>
      <SideActionBar source={content.account.avatar} />
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
          baseStyle={{color: colors.text, fontWeight: '600', fontSize: 16}}
          tagsStyles={{
            a: {color: colors.bizarroTessarak, textDecorationLine: 'none'},
          }}
          renderersProps={rendererProps}
        />
      </View>
      {content.media_attachments.length > 0 &&
        content.media_attachments[0].type.startsWith('image') && (
          <View
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
                aspectRatio: content.media_attachments[0].meta.original.aspect,
              }}
            />
          </View>
        )}
    </View>
  );
}
