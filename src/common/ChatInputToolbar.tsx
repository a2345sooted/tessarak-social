import React, {useContext} from 'react';
import {
  IMessage,
  InputToolbar,
  InputToolbarProps,
} from 'react-native-gifted-chat';
import {AppContext} from '@app-ctx';

export type ChatInputToolbarProps = InputToolbarProps<IMessage>;

export function ChatInputToolbar(props: ChatInputToolbarProps): JSX.Element {
  const {colors} = useContext(AppContext);

  return (
    <InputToolbar
      {...props}
      containerStyle={{
        // borderTopWidth: 2,
        borderTopColor: '#7c7b7b',
        backgroundColor: colors.bg1,
      }}
    />
  );
}
