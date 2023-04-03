import React, {useContext} from 'react';
import {Divider, IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {Alert, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CreatePortalWithSellerScreen = () => {
  const {colors} = useContext(AppContext);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={{backgroundColor: colors.bg1, flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: insets.top}}>
        <IconButton
          icon="arrow-left"
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
          Create Portal with Seller
        </Text>
      </View>
      <Divider />
      <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <Text
          variant="bodyLarge"
          style={{fontWeight: 'bold', color: colors.text}}>
          Initial message, maybe other options
        </Text>
      </View>
    </View>
  );
};

export default CreatePortalWithSellerScreen;
