import React, {useContext, useEffect, useState} from 'react';
import {IconButton, Text} from 'react-native-paper';
import {SafeScreen} from '@common';
import {AppContext} from '@app-ctx';
import {Alert, View} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import SendButton from '../common/SendButton';
import ChatBubble from '../common/ChatBubble';
import ChatMessageText from '../common/ChatMessageText';
import ChatInputToolbar from '../common/ChatInputToolbar';
import CustomNoAvatarMessage from '../common/CustomNoAvatarMessage';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';

const TessaScreen = () => {
  const {colors} = useContext(AppContext);
  const [messages, setMessages] = useState<any[]>([]);

  const navigation = useNavigation();

  const tabBarHeight = useBottomTabBarHeight();

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Tessa is an ai chatbot that specializes in helping you navigate the Tessarak and make send of the rapidly changing ai and media landscape.',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Tessa',
        },
      },
    ]);
  }, []);

  function onSend(messages: any[]) {}

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
        placeholder="Type a message..."
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
