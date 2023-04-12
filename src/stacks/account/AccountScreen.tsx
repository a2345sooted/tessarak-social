import React, {useContext} from 'react';
import {Divider, IconButton, List, Text} from 'react-native-paper';
import {SafeScreen} from '@common';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {maskPhoneNumber} from '@utils';
import {triggerImpactLight} from '@haptic';
import {PulseIndicator} from 'react-native-indicators';
import Animated, {FadeInUp, FadeOutDown} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-paper';

const AccountScreen = () => {
  const {colors, user} = useContext(AppContext);

  const navigation = useNavigation();

  return (
    <SafeScreen>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          variant="headlineSmall"
          style={{
            fontWeight: 'bold',
            color: colors.text,
            flex: 1,
            marginLeft: 20,
          }}>
          {/*{maskPhoneNumber(user!.phone.substring(2))}*/}
          Command Center
        </Text>
        <IconButton
          icon="cog"
          iconColor={'#c66ef1'}
          size={22}
          onPress={() => {
            //@ts-ignore
            navigation.navigate('Settings');
          }}
        />
        <IconButton
          style={{marginLeft: -8}}
          icon="rocket"
          iconColor={colors.tessarak}
          size={25}
          onPress={() => {
            //@ts-ignore
            navigation.navigate('Settings');
          }}
        />
        <TouchableOpacity
          style={{width: 35, height: 35, marginRight: 10, marginLeft: -4}}
          onPress={() => {}}>
          <PulseIndicator color={colors.bizarroTessarak} size={35} />
        </TouchableOpacity>
      </View>
      <Divider />
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Avatar.Icon size={60} icon="folder" />
      </View>
      <View
        style={{
          paddingHorizontal: 12,
          marginTop: 12,
        }}>
        <Text
          variant="titleLarge"
          style={{
            fontWeight: 'bold',
            color: colors.text,
            textAlign: 'center',
          }}>
          @barehugger
        </Text>
        <Text
          variant="labelSmall"
          style={{
            fontWeight: 'bold',
            color: colors.text,
            textAlign: 'center',
          }}>
          @tessarak.org
        </Text>
        <View style={{paddingHorizontal: 30, marginTop: 16}}>
          <Text
            variant="labelSmall"
            style={{
              fontWeight: 'bold',
              color: colors.text,
            }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <TouchableOpacity style={{marginHorizontal: 8}}>
          <Text
            variant="displaySmall"
            style={{
              fontWeight: 'bold',
              color: colors.text,
              textAlign: 'center',
            }}>
            644
          </Text>
          <Text
            variant="labelSmall"
            style={{
              fontWeight: 'bold',
              color: colors.text,
              textAlign: 'center',
            }}>
            Followers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal: 8}}>
          <Text
            variant="displaySmall"
            style={{
              fontWeight: 'bold',
              color: colors.text,
              textAlign: 'center',
            }}>
            192
          </Text>
          <Text
            variant="labelSmall"
            style={{
              fontWeight: 'bold',
              color: colors.text,
              textAlign: 'center',
            }}>
            Following
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <TouchableOpacity style={{marginHorizontal: 8}}>
          <Text
            variant="headlineMedium"
            style={{
              fontWeight: 'bold',
              color: colors.text,
              textAlign: 'center',
            }}>
            644
          </Text>
          <Text
            variant="labelSmall"
            style={{
              fontWeight: 'bold',
              color: colors.text,
              textAlign: 'center',
            }}>
            Likes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal: 8}}>
          <Text
            variant="headlineMedium"
            style={{
              fontWeight: 'bold',
              color: colors.text,
              textAlign: 'center',
            }}>
            192
          </Text>
          <Text
            variant="labelSmall"
            style={{
              fontWeight: 'bold',
              color: colors.text,
              textAlign: 'center',
            }}>
            Shares
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal: 8}}>
          <Text
            variant="headlineMedium"
            style={{
              fontWeight: 'bold',
              color: colors.text,
              textAlign: 'center',
            }}>
            991
          </Text>
          <Text
            variant="labelSmall"
            style={{
              fontWeight: 'bold',
              color: colors.text,
              textAlign: 'center',
            }}>
            Downloads
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 12, paddingHorizontal: 30}}>
        <List.Item
          titleStyle={{color: colors.text, fontWeight: 'bold'}}
          title="Public"
          right={() => <List.Icon color={colors.text} icon="arrow-right" />}
        />
        <Divider />
        <List.Item
          titleStyle={{color: colors.text, fontWeight: 'bold'}}
          title="Private"
          right={() => <List.Icon color={colors.text} icon="arrow-right" />}
        />
        <Divider />
        <List.Item
          titleStyle={{color: colors.text, fontWeight: 'bold'}}
          title="Bookmarked"
          right={() => <List.Icon color={colors.text} icon="arrow-right" />}
        />
        <Divider />
        <List.Item
          titleStyle={{color: colors.text, fontWeight: 'bold'}}
          title="Liked"
          right={() => <List.Icon color={colors.text} icon="arrow-right" />}
        />
        <Divider />
      </View>
    </SafeScreen>
  );
};

export default AccountScreen;
