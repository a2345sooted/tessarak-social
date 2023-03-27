import {View} from 'react-native';
import React, {useContext} from 'react';
import {IMessage, Send, SendProps} from 'react-native-gifted-chat';
//@ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppContext} from '@app-ctx';

type SendButtonProps = SendProps<IMessage>;

function SendButton(props: SendButtonProps): JSX.Element {
  const {colors} = useContext(AppContext);
  return (
    <Send {...props} alwaysShowSend>
      <View style={{justifyContent: 'center', height: '100%', marginRight: 10}}>
        <Icon name="send-circle" size={35} color={colors.tessarak} />
      </View>
    </Send>
  );
}

export default SendButton;
