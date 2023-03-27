import React, {useContext} from 'react';
import {Divider, IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ActivityScreen = () => {
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
        />
        <Text
          variant="headlineSmall"
          style={{
            fontWeight: 'bold',
            color: colors.text,
            textAlign: 'center',
          }}>
          Activity
        </Text>
      </View>
      <Divider />
      <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <Text
          variant="bodyLarge"
          style={{fontWeight: 'bold', color: colors.text}}>
          An activity feed about your interactions and other dimensions that you
          aren't subscribed to / in currently.
        </Text>
      </View>
    </View>
  );
};

export default ActivityScreen;
