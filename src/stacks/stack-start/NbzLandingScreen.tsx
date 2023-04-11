import React, {useContext} from 'react';
import {Divider, IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const NbzLandingScreen = () => {
  const {colors} = useContext(AppContext);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{backgroundColor: colors.bg1, flex: 1, paddingTop: insets.top}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconButton
          icon="arrow-left"
          iconColor={colors.text}
          size={30}
          onPress={() => navigation.goBack()}
        />
        {/*<Text*/}
        {/*  variant="headlineSmall"*/}
        {/*  style={{*/}
        {/*    fontWeight: 'bold',*/}
        {/*    color: colors.text,*/}
        {/*    textAlign: 'center',*/}
        {/*  }}>*/}
        {/*  Activity*/}
        {/*</Text>*/}
      </View>
      <View
        style={{
          marginTop: 12,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <IconButton icon="bell" iconColor={'#bb9604'} size={30} />
        <View>
          <Text
            variant="titleLarge"
            style={{fontWeight: 'bold', color: colors.text}}>
            The Nebuchadnezzar
          </Text>
          <Text
            variant="titleMedium"
            style={{fontWeight: 'bold', color: colors.text}}>
            Some tagline
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 12,
          paddingHorizontal: 20,
        }}>
        <Text variant="titleSmall" style={{color: colors.text}}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Text>
      </View>
      <View
        style={{
          marginTop: 12,
          paddingHorizontal: 20,
        }}>
        <Divider style={{marginVertical: 8}} />
        <Text
          variant="titleSmall"
          style={{fontWeight: 'bold', color: colors.tessarak}}>
          Owned & maintained by:
        </Text>
        <Text
          variant="titleMedium"
          style={{fontWeight: 'bold', color: colors.text}}>
          The Tessarak Foundation
        </Text>
      </View>
      <View
        style={{
          marginTop: 12,
          paddingHorizontal: 20,
        }}>
        <Text
          variant="titleSmall"
          style={{fontWeight: 'bold', color: colors.tessarak}}>
          Number of orbs onboard:
        </Text>
        <Text
          variant="headlineMedium"
          style={{fontWeight: '800', color: colors.text}}>
          1,767
        </Text>
      </View>
    </View>
  );
};

export default NbzLandingScreen;
