import React, { useContext, useState } from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Divider, IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {useNavigation} from '@react-navigation/native';
import {SafeScreen} from '@common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StartFooter} from './IntroScreenOne';

const CommunityRocketRulesScreen = () => {
  const {colors} = useContext(AppContext);

  const insets = useSafeAreaInsets();

  const navigation = useNavigation();

  return (
    <SafeScreen>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconButton
                icon="close"
                iconColor={colors.text}
                size={30}
                onPress={() => navigation.goBack()}
            />
          <View>
            <View
              style={{
                flexDirection: 'row',
                paddingRight: 20,
              }}>
              <Text
                variant="titleMedium"
                style={{fontWeight: '900', color: colors.bizarroTessarak}}>
                RULES OF
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 20,
                  paddingRight: 20,
              }}>
              <Text
                variant="headlineSmall"
                style={{
                  fontWeight: 'bold',
                  color: colors.text,
                }}>
                The Nebuchadnezzar
              </Text>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginBottom: 20}}>
          <Divider />
        </View>

        <ScrollView
          style={{paddingHorizontal: 20, paddingBottom: insets.bottom + 20}}>
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
              The only personal information this app, Tessarak, uses directly is
              your phone number. However, the builtin chatbot Tessa uses ChatGPT
              behind the scenes. Therefore, anything you send in the Tessa
              messaging section of Tessarak will be sent to OpenAI through the
              ChatGPT api. We recommend you read their privacy policy if you
              have concerns about this.
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
              Currently we are using Auth0, various AWS services, and OpenAI to
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
              Yes, for every release, if a change was made that affects these
              terms, they will be updated and you will be prompted to reread and
              accept.
            </Text>
          </View>

          <View>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: 'bold',
                color: '#c66ef1',
              }}>
              Do I have to agree to these terms to use the app?
            </Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: 'bold',
                color: colors.text,
              }}>
              Yes. If you don't agree to them, we encourage you to check back
              and reread them periodically and see if newer versions are more
              agreeable. The plan is to continue to make the data more and more
              secure and untouchable. However, for now, to work out designs and
              kinks, we are bootstrapping using more traditional client/server
              models.
            </Text>
          </View>

          <View style={{marginTop: 20, paddingHorizontal: 20, marginBottom: 50}}>
            <Button
                uppercase
              labelStyle={{color: colors.text, fontWeight: 'bold'}}
              buttonColor={colors.tessarak}
              theme={{roundness: 1}}
              onPress={() => {
                //@ts-ignore
                navigation.navigate('GetPhoneNumber');
              }}>
              I agree
            </Button>
          </View>

        </ScrollView>
        <View style={{paddingHorizontal: 20, marginBottom: 20}}>
          <Divider />
        </View>
        <View style={{flex: 1}} />
        <View style={{}}>
          <StartFooter />
        </View>
        {/*<View style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>*/}
        {/*</View>*/}
      </View>
    </SafeScreen>
  );
};

export default CommunityRocketRulesScreen;
