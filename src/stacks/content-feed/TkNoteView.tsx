import React, {useContext} from 'react';
import {Dimensions, View} from 'react-native';
import {AppContext} from '@app-ctx';
import SideActionBar from './SideActionBar';
import {Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
      <View style={{marginTop: insets.top + 75, paddingHorizontal: 16}}>
        <Text style={{color: colors.text}}>{content.name}</Text>
        <Text style={{color: colors.text}}>{generateUsername(content.id)}</Text>
        {/*<Text style={{color: colors.text}}>{JSON.stringify(content, null, 2)}</Text>*/}
      </View>
    </View>
  );
}
