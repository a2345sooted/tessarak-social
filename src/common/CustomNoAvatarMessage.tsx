import React from 'react';
import {IMessage, Message, MessageProps} from 'react-native-gifted-chat';

class NoAvatarMessage extends Message {
  renderAvatar(): JSX.Element | null {
    return null;
  }
}

function CustomNoAvatarMessage(props: MessageProps<IMessage>): JSX.Element {
  return <NoAvatarMessage {...props} />;
}

export default CustomNoAvatarMessage;
