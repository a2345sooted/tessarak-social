import React, {useContext, useRef, useState} from 'react';
import {Card, Divider, IconButton, Text, TextInput} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {Alert, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CreatePortalWithSellerScreen = () => {
  const {colors} = useContext(AppContext);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const messageInputRef = useRef<any>();
  const [message, setMessage] = useState('');

  const [isSending, setIsSending] = useState(false);
  const [errorSending, setErrorSending] = useState<any>(null);

  async function handleMessageInputComplete() {}

  return (
    <View style={{backgroundColor: colors.bg1, flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconButton
          icon="close"
          iconColor={colors.bizarroTessarak}
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text
          variant="headlineSmall"
          style={{
            fontWeight: 'bold',
            color: colors.text,
            flex: 1,
          }}>
          Message Seller
        </Text>
        <IconButton
          icon="send"
          iconColor={colors.bizarroTessarak}
          size={30}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Divider />
      <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <Card mode="outlined" style={{backgroundColor: colors.dark}}>
          <View style={{paddingHorizontal: 8, paddingVertical: 8}}>
            <TextInput
              autoFocus
              multiline
              // numberOfLines={3}
              disabled={isSending}
              maxLength={500}
              returnKeyType="next"
              onSubmitEditing={handleMessageInputComplete}
              ref={(input: any) => (messageInputRef.current = input)}
              style={{
                fontSize: 20,
                paddingHorizontal: 8,
                backgroundColor: colors.dark,
              }}
              textColor={colors.text}
              underlineColor={colors.tessarak}
              activeUnderlineColor={colors.tessarak}
              // underlineStyle={{opacity: 0}}
              contentStyle={{
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: colors.dark,
              }}
              mode="flat"
              label=""
              value={message}
              onChangeText={text => {
                setMessage(text);
              }}
            />
          </View>
        </Card>
      </View>
    </View>
  );
};

export default CreatePortalWithSellerScreen;
