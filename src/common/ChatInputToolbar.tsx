import React, {useContext} from 'react';
import {
  IMessage,
  InputToolbar,
  InputToolbarProps,
} from 'react-native-gifted-chat';
import {AppContext} from '@app-ctx';

export type ChatInputToolbarProps = InputToolbarProps<IMessage>;

function ChatInputToolbar(props: ChatInputToolbarProps): JSX.Element {
  const {colors} = useContext(AppContext);

  return (
    <InputToolbar
      {...props}
      containerStyle={{
        borderTopWidth: 0,
        backgroundColor: colors.bg1,
      }}
    />
  );
}

export default ChatInputToolbar;
