import React, {useContext} from 'react';
import {Divider, IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {Alert, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DimensionsScreen = () => {
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
          variant="headlineLarge"
          style={{
            fontWeight: 'bold',
            color: colors.text,
            flex: 2,
            textAlign: 'center',
          }}>
          dimensions
        </Text>
        <IconButton
          icon="layers-search-outline"
          iconColor={colors.tessarak}
          size={25}
          onPress={() => Alert.alert('Search the dimensions specifically')}
          style={{flex: 1}}
        />
      </View>
      <Divider />
      <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <Text
          variant="bodyLarge"
          style={{fontWeight: 'bold', color: colors.text}}>
          Here is where you would choose what dimension you want your feed from
          at this moment. A comparison would be: the TikTok FYP and Following
          would each be dimensions.
        </Text>
      </View>
      <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <Text
          variant="bodyLarge"
          style={{fontWeight: 'bold', color: colors.text}}>
          In this section you would be able to bookmark dimensions, discover new
          ones, etc.
        </Text>
      </View>
      <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <Text
          variant="bodyLarge"
          style={{fontWeight: 'bold', color: colors.text}}>
          A dimension would be a feed of the common global data from some source
          using some algorithm. A dimension can also aggregate other dimensions.
        </Text>
      </View>
      <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <Text
          variant="bodyLarge"
          style={{fontWeight: 'bold', color: colors.text}}>
          Some ideas of dimensions might be: #safe-for-kids, #astronomy, #politicsA, #politicsB, #Asia, etc.
        </Text>
      </View>
    </View>
  );
};

export default DimensionsScreen;
