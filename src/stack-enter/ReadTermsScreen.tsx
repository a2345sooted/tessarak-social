import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Divider, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {useNavigation} from '@react-navigation/native';
import {SafeScreen} from '@common';

const ReadTermsScreen = () => {
  const {colors} = useContext(AppContext);

  const navigation = useNavigation();

  function bulletPoint(text: string, color = '#c66ef1'): JSX.Element {
    return (
      <View
        style={{
          marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text
          variant="titleLarge"
          style={{
            fontWeight: 'bold',
            color,
          }}>
          {text}
        </Text>
      </View>
    );
  }

  return (
    <SafeScreen>
      <View style={{flex: 1}}>
        <View
          style={{
            paddingTop: 60,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            variant="headlineLarge"
            style={{fontWeight: 'bold', color: colors.tessarak}}>
            Tessarak
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          <Text
            variant="titleMedium"
            style={{
              fontWeight: 'bold',
              color: colors.text,
            }}>
            Make sure you're good with all these terms:
          </Text>
        </View>
        <View style={{paddingHorizontal: 20, marginBottom: 20}}>
          <Divider />
        </View>

        <ScrollView style={{paddingHorizontal: 20}}>
          <View>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: 'bold',
                color: '#c66ef1',
              }}>
              Personal Information
            </Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: 'bold',
                color: colors.text,
              }}>
              At this moment, the only personal information collected is your
              phone number.
            </Text>
          </View>

          <View>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: 'bold',
                color: '#c66ef1',
              }}>
              Passwords
            </Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: 'bold',
                color: colors.text,
              }}>
              Tessarak does not use passwords; rather, one time codes texted to
              you. That's the only reason we need your phone number. We
              currently use Auth0 as an identity service provider.
            </Text>
          </View>

          <View>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: 'bold',
                color: '#c66ef1',
              }}>
              What data is stored?
            </Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: 'bold',
                color: colors.text,
              }}>
              At the moment, the only thing stored is your phone number and a
              UserID for you in Auth0's database.
            </Text>
          </View>

          <View>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: 'bold',
                color: '#c66ef1',
              }}>
              Is this already decentralized?
            </Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: 'bold',
                color: colors.text,
              }}>
              No, Tessarak is not already decentralized. The project is still
              very new and a decentralized backend still needs to be built. In
              the meantime, we are hosting a cluster of webservers to allow for
              usage of the platform right now..
            </Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: 'bold',
                color: colors.text,
              }}>
              We will be as transparent as possible about what is going on with
              that cluster. And, as soon as the decentralized Tessarak backend
              is ready, we will migrate any data that hosted in the cloud there.
            </Text>
          </View>

          <View>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: 'bold',
                color: '#c66ef1',
              }}>
              During the ramp up time, where will our data be stored?
            </Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: 'bold',
                color: colors.text,
              }}>
              Currently the plan is to use Auth0 and various AWS services to
              drive Tessarak until a suitable decentralized network is ready.
            </Text>
          </View>

          <View>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: 'bold',
                color: '#c66ef1',
              }}>
              Will these terms be updated as the app goes along?
            </Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: 'bold',
                color: colors.text,
              }}>
              Yes, for every release, if a change was made that affects these terms, they will be updated and you will be prompted to re-read and accept.
            </Text>
          </View>

            <View style={{marginTop: 20, paddingHorizontal: 20, paddingBottom: 20}}>
                <Button
                    labelStyle={{color: colors.text, fontWeight: 'bold'}}
                    buttonColor={colors.tessarak}
                    theme={{roundness: 1}}
                    onPress={() => {
                        //@ts-ignore
                        navigation.navigate('GetPhoneNumber');
                    }}>
                    I agree, continue...
                </Button>
            </View>

            <View style={{marginTop: 10, paddingHorizontal: 20, paddingBottom: 40}}>
                <Button
                    labelStyle={{color: colors.text, fontWeight: 'bold'}}
                    buttonColor="#e851be"
                    theme={{roundness: 1}}
                    onPress={() => {
                        //@ts-ignore
                        navigation.navigate('GetPhoneNumber');
                    }}>
                    I don't agree.
                </Button>
            </View>
        </ScrollView>
        <View style={{paddingHorizontal: 20, marginBottom: 20}}>
          <Divider />
        </View>
        <View style={{flex: 1}} />
        <View style={{paddingBottom: 20}}>
          <Text
            variant="titleSmall"
            style={{
              fontWeight: 'bold',
              color: colors.text,
              textAlign: 'center',
            }}>
            The Tessarak Project 2023
          </Text>
        </View>
      </View>
    </SafeScreen>
  );
};

export default ReadTermsScreen;
