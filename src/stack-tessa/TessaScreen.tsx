import React, {useCallback, useContext, useEffect, useState} from 'react';
import {IconButton, Text} from 'react-native-paper';
import {SafeScreen} from '@common';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import SendButton from '../common/SendButton';
import ChatBubble from '../common/ChatBubble';
import ChatMessageText from '../common/ChatMessageText';
import ChatInputToolbar from '../common/ChatInputToolbar';
import CustomNoAvatarMessage from '../common/CustomNoAvatarMessage';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {createSocket} from '../services/api';
import {tkDelay} from '../utils';

export interface TkMessage extends IMessage {
  type: 'tessa_typing' | 'tessa_message' | 'user_message';
}

const TessaScreen = () => {
  const {colors} = useContext(AppContext);

  const navigation = useNavigation();

  const tabBarHeight = useBottomTabBarHeight();

  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isSocketConnected, setIsSocketConnected] = useState(false);

  const [messages, setMessages] = useState<TkMessage[]>([]);
  const [tessaTyping, setTessaTyping] = useState(false);

  useEffect(() => {
    if (!isSocketConnected) {
      setupSocket();
    }
  }, [isSocketConnected]);

  async function setupSocket(): Promise<void> {
    try {
      const chatSocket = await createSocket({
        onopen: handleSocketOpen,
        onclose: handleSocketClose,
        onerror: handleSocketError,
        onmessage: handleSocketMessage,
      });
      setSocket(chatSocket);
      setIsSocketConnected(true);
    } catch (error: any) {
      // todo what to do with this error?
      await tkDelay(1000);
      return setupSocket();
    }
  }

  const handleSocketMessage = useCallback((event: WebSocketMessageEvent) => {
    const message = JSON.parse(event.data);
    if (message.type === 'tessa_typing') {
      setTessaTyping(true);
    } else if (message.type === 'tessa_message') {
      setTessaTyping(false);
      const tkMessage: TkMessage = {
        type: 'tessa_message',
        _id: message.id,
        text: message.text,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Tessa',
        },
      };
      setMessages(previousMessages =>
        GiftedChat.append<TkMessage>(previousMessages, [tkMessage]),
      );
    } else {
      setTessaTyping(false);
    }
  }, []);

  const handleSocketError = useCallback((error: WebSocketErrorEvent) => {
    // Alert.alert('error = ' + error.message);
  }, []);

  const handleSocketOpen = useCallback(() => {
    // Alert.alert('socket is open');
    setIsSocketConnected(true);
  }, []);

  const handleSocketClose = useCallback((event: WebSocketCloseEvent) => {
    setIsSocketConnected(false);
  }, []);

  const onSend = useCallback(
    (msgs: TkMessage[] = []) => {
      const message = msgs[0];
      message.type = 'user_message';
      setMessages(previousMessages =>
        GiftedChat.append<TkMessage>(previousMessages, [message]),
      );
      socket!.send(JSON.stringify(msgs[0]));
    },
    [socket],
  );

  return (
    <SafeScreen>
      <View
        style={{
          paddingBottom: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <IconButton
          icon="tune-vertical"
          iconColor={colors.tessarak}
          size={25}
          onPress={() => {
            //@ts-ignore
            navigation.navigate('Tune');
          }}
        />
        <Text
          variant="headlineLarge"
          style={{fontWeight: 'bold', color: colors.text, flex: 1}}>
          Tessa
        </Text>
        <IconButton
          icon="forum"
          iconColor={colors.tessarak}
          size={25}
          onPress={() => {
            //@ts-ignore
            navigation.navigate('TessaContext');
          }}
        />
      </View>
      <GiftedChat
        disableComposer={!isSocketConnected || tessaTyping}
        isTyping={tessaTyping}
        textInputProps={{
          fontWeight: 'bold',
          color: colors.text,
          fontSize: 16,
        }}
        bottomOffset={tabBarHeight}
        messagesContainerStyle={{
          backgroundColor: colors.bg1,
          flexDirection: 'column',
        }}
        renderAvatarOnTop
        placeholder={!isSocketConnected ? 'Not connected :|' : tessaTyping ? 'Disabled while Tessa is typing...' : 'Type a message...'}
        renderSend={props => <SendButton {...props} />}
        renderBubble={props => <ChatBubble {...props} />}
        renderMessageText={props => <ChatMessageText {...props} />}
        renderInputToolbar={props => <ChatInputToolbar {...props} />}
        renderMessage={CustomNoAvatarMessage}
        messages={messages}
        onSend={msgs => onSend(msgs as any)}
        user={{_id: 1}}
        listViewProps={{keyboardDismissMode: 'on-drag'}}
      />
    </SafeScreen>
  );
};

export default TessaScreen;
