import React, {useContext} from 'react';
import {
  IMessage,
  MessageText,
  MessageTextProps,
} from 'react-native-gifted-chat';
import {AppContext} from '@app-ctx';
import {Alert} from 'react-native';

export function ChatMessageText(props: MessageTextProps<IMessage>): JSX.Element {
  const {colors} = useContext(AppContext);
  return (
    <MessageText
      {...props}
      textStyle={{
        left: {
          fontWeight: '400',
          fontSize: 17,
          color: colors.text,
        },
        right: {fontWeight: 'bold'},
      }}
      parsePatterns={(item: any) => [
        {
          type: 'url',
          style: {color: '#c66ef1'},
          onPress: () =>
            Alert.alert("The app doesn't handle opening links from Tessa yet."),
        },
      ]}
    />
  );
}
