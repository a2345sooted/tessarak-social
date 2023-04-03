import React, {useContext} from 'react';
import {Divider, IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {Alert, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const TessaContextScreen = () => {
  const {colors} = useContext(AppContext);
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: colors.bg1, flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconButton
          icon="close"
          iconColor={colors.tessarak}
          size={30}
          onPress={() => navigation.goBack()}
          style={{flex: 1}}
        />
        <Text
          variant="headlineSmall"
          style={{
            fontWeight: 'bold',
            color: colors.text,
            flex: 2,
            textAlign: 'center',
          }}>
          Context
        </Text>
        <IconButton
          icon="plus-circle"
          iconColor={colors.tessarak}
          size={25}
          onPress={() => Alert.alert('Create a new topic that Tessa knows all about.')}
          style={{flex: 1}}
        />
      </View>
      <Divider />
      <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <Text
          variant="bodyLarge"
          style={{fontWeight: 'bold', color: colors.text}}>
          Context is information that you use to prime ChatGPT or whatever AI is configured to drive Tessa.  She could read websites, you could put in a bunch of info, etc.  Context will also automatically generate as you have different conversations.  Just like ChatGPT.
        </Text>
      </View>
    </View>
  );
};

export default TessaContextScreen;
