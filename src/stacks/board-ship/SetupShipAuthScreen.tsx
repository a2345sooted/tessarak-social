import React, { useContext, useEffect, useState } from 'react';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StartFooter} from '../start/IntroScreen';
import CreateUsernameSection from './CreateUsernameSection';
import {AuthHeader} from './AuthSetupHeader';
import GetPhoneNumberSection from './GetPhoneNumberSection';
import GetEmailSection from './GetEmailSection';
import VerifyCodeSection from './VerifyCodeSection';
import {ChooseAuthMethodSection} from './ChooseAuthMethodSection';
import {ShipAllowedAuthMethod} from './mock-data';
import { tkDelay } from '@utils';

enum AuthSetupSection {
  CREATE_USERNAME,
  CHOOSE_AUTH_METHOD,
  GET_PHONE,
  GET_EMAIL,
  VERIFY_CODE,
  OUTRO,
}

const SetupShipAuthScreen = () => {
  const {colors} = useContext(AppContext);
  const insets = useSafeAreaInsets();
  const [section, setSection] = useState<AuthSetupSection | null>(null);

  useEffect(() => {
    tkDelay(100).then(() => setSection(AuthSetupSection.CREATE_USERNAME));
  }, []);

  function gotoCreateUsernameSection() {
    setSection(AuthSetupSection.CREATE_USERNAME);
  }

  function gotoChooseAuthMethodSection() {
    setSection(AuthSetupSection.CHOOSE_AUTH_METHOD);
  }

  function gotoGetPhoneNumberSection() {
    setSection(AuthSetupSection.GET_PHONE);
  }

  function gotoGetEmailSection() {
    setSection(AuthSetupSection.GET_EMAIL);
  }

  function gotoVerifyCodeSection() {
    setSection(AuthSetupSection.VERIFY_CODE);
  }

  function handleAuthChoice(method: ShipAllowedAuthMethod) {
    switch (method) {
      case 'email': {
        gotoGetEmailSection();
        break;
      }
      case 'sms': {
        gotoGetPhoneNumberSection();
        break;
      }
    }
  }

  return (
    <View
      style={{backgroundColor: colors.bg1, flex: 1, paddingTop: insets.top}}>
      <AuthHeader />
      {section === AuthSetupSection.CREATE_USERNAME && (
        <CreateUsernameSection nextFn={gotoChooseAuthMethodSection} />
      )}
      {section === AuthSetupSection.CHOOSE_AUTH_METHOD && (
        <ChooseAuthMethodSection
          nextFn={handleAuthChoice}
          prevFn={gotoCreateUsernameSection}
        />
      )}
      {section === AuthSetupSection.GET_PHONE && <GetPhoneNumberSection />}
      {section === AuthSetupSection.GET_EMAIL && <GetEmailSection />}
      {section === AuthSetupSection.VERIFY_CODE && <VerifyCodeSection />}
      <View style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
        <StartFooter />
      </View>
    </View>
  );
};

export default SetupShipAuthScreen;
