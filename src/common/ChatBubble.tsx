import React, {useContext} from 'react';
import {Bubble, BubbleProps, IMessage} from 'react-native-gifted-chat';
import {AppContext} from '@app-ctx';

export function ChatBubble(props: BubbleProps<IMessage>): JSX.Element {
  const {colors} = useContext(AppContext);

  return (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: colors.tessarak,
        },
        left: {
          backgroundColor: '#424242',
        },
      }}
    />
  );
}
