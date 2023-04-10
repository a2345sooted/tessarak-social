import React, {useContext} from 'react';
import {Divider, IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SearchScreen = () => {
  const {colors} = useContext(AppContext);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{backgroundColor: colors.bg1, flex: 1, paddingTop: insets.top}}>
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
          Search
        </Text>
      </View>
      <Divider />
      <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <Text
          variant="bodyLarge"
          style={{fontWeight: 'bold', color: colors.text}}>
          A Tessarak global search tool.
        </Text>
      </View>
    </View>
  );
};

export default SearchScreen;
