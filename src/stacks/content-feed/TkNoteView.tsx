import React, {useContext} from 'react';
import {Dimensions, Image, View} from 'react-native';
import {AppContext} from '@app-ctx';
import SideActionBar from './SideActionBar';
import {Divider, Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RenderHtml from 'react-native-render-html';
import {getAspectRatio} from '@utils';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export interface TkNoteViewProps {
  content: any;
}

function generateUsername(actorId: string): string {
  const splitId = actorId.split('/');
  let domain: string;
  let username: string;
  for (let i = 0; i < splitId.length; i++) {
    const v = splitId[i];
    if (v === 'users') {
      domain = splitId[i - 1];
      username = splitId[i + 1];
      break;
    }
  }
  if (!domain! || !username!) {
    throw new Error('invalid id');
  }
  return `@${username}@${domain}`;
}

export function TkNoteView({content}: TkNoteViewProps): JSX.Element {
  const {colors} = useContext(AppContext);
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        backgroundColor: colors.bg1,
        height: screenHeight - 95,
        width: screenWidth,
      }}>
      <SideActionBar />
      <View
        style={{
          marginTop: insets.top + 75,
          paddingHorizontal: 16,
          flexDirection: 'row',
          alignItems: 'center',
          // backgroundColor: '#696868',
          paddingVertical: 4,
        }}>
        <Image
          source={{uri: content.avatar}}
          // style={{height: 40, width: 40, borderRadius: 20, borderWidth: 1, borderColor: colors.text}}
          style={{height: 40, width: 40, borderRadius: 20}}
        />
        <View style={{marginLeft: 12}}>
          <Text
            variant="titleMedium"
            style={{color: colors.text, fontWeight: 'bold'}}>
            {content.name}
          </Text>
          <Text style={{color: colors.text}}>
            {generateUsername(content.actor)}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 8,
          paddingHorizontal: 16,
        }}>
        <Divider style={{marginTop: 12, marginBottom: 4}} />
        <RenderHtml
          source={{html: content.object.content}}
          contentWidth={screenWidth}
          baseStyle={{color: colors.text, fontWeight: '600', fontSize: 18}}
        />
      </View>
      {content.object.attachment.length > 0 &&
        content.object.attachment[0].mediaType === 'image/png' && (
          <View style={{paddingHorizontal: 16}}>
            <Image
              source={{uri: content.object.attachment[0].url}}
              style={{
                width: '100%',
                height: undefined,
                aspectRatio: getAspectRatio(
                  content.object.attachment[0].width,
                  content.object.attachment[0].height,
                ),
              }}
            />
          </View>
        )}
    </View>
  );
}
