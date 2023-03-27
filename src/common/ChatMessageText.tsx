import React, {useContext} from 'react';
import { IMessage, MessageText, MessageTextProps } from 'react-native-gifted-chat';
import { AppContext } from '@app-ctx';

function ChatMessageText(props: MessageTextProps<IMessage>): JSX.Element {
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
    />
  );
}

export default ChatMessageText;
