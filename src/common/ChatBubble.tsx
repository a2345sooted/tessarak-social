import React, {useContext} from 'react';
import { Bubble, BubbleProps, IMessage } from 'react-native-gifted-chat';
import {useTheme} from 'react-native-paper';
import { AppContext } from '@app-ctx';

function ChatBubble(props: BubbleProps<IMessage>): JSX.Element {
  const {colors} = useContext(AppContext);
  const theme = useTheme();

  return (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: colors.user,
        },
        left: {
          backgroundColor: true
            ? theme.colors.inverseSurface
            : theme.colors.surfaceDisabled,
        },
      }}
    />
  );
}

export default ChatBubble;
