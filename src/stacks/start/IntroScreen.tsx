import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Divider, IconButton, List, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {SafeScreen} from '@common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  FadeOut,
  FadeOutDown,
  FadeOutLeft,
  FadeOutRight,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {PulseIndicator} from 'react-native-indicators';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {tkDelay} from '@utils';
import TessaLine, {TessaMessageLine} from './TessaLine';
import {triggerImpactLight} from '@haptic';
import {DarkAppColors} from '@theme';
import {useNavigation} from '@react-navigation/native';

export interface StartFooterProps {}

export function StartFooter({}: StartFooterProps) {
  const {colors} = useContext(AppContext);
  const insets = useSafeAreaInsets();
  return (
    <View style={{paddingBottom: 20 + insets.bottom}}>
      <View
        style={{
          marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text
          variant="titleSmall"
          style={{
            fontWeight: 'bold',
            color: colors.text,
          }}>
          The Tessarak Foundation, 2023
        </Text>
      </View>
      <Text
        variant="bodySmall"
        style={{
          color: '#c66ef1',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Version 1.0.4
      </Text>
    </View>
  );
}

const SLIDE_1_LINES: TessaMessageLine[] = [
  {
    id: 1,
    text: 'That is your orb.',
    delayNext: 200,
    fadeColor: true,
  },
  {
    id: 2,
    text: 'Your orb contains everything you do in the Tessarak.',
    delayNext: 200,
    fadeColor: true,
  },
  {
    id: 3,
    text: 'All of your posts, likes, comments, followers, everything!',
    delayNext: 700,
  },
  {
    id: 4,
    text: 'In the Tessarak, your orb is your identity and it belongs to you.',
    delayNext: 400,
    fontWeight: '500',
  },
  {
    id: 5,
    text: 'Press and hold your orb to continue...',
    delayNext: 400,
    fontWeight: '500',
    color: DarkAppColors.tessarak,
  },
];

const SLIDE_2_LINES: TessaMessageLine[] = [
  // {
  //   id: 1,
  //   text: 'The Tessarak can not be censored by governments or corporations.',
  //   delayNext: 200,
  //   fadeColor: true,
  // },
  {
    id: 2,
    text: 'The pH level in the Tessarak is pretty high and there are a lot of sharp edges. Orbs can not survive in it without some kind of protection.',
    delayNext: 200,
    fadeColor: true,
  },
  {
    id: 3,
    text: "That's where ships come in.",
    delayNext: 200,
    fadeColor: true,
    fontWeight: '500',
  },
  {
    id: 4,
    text: 'Press and hold the ship to continue...',
    delayNext: 200,
    fadeColor: true,
    fontWeight: '500',
    color: DarkAppColors.tessarak,
  },
];

const SLIDE_3_LINES: TessaMessageLine[] = [
  {
    id: 1,
    text: 'Ships allow you and your orb to explore and enjoy the Tessarak.',
    delayNext: 200,
    fadeColor: true,
  },
  {
    id: 2,
    text: 'Ships also can have more than one orb onboard.',
    delayNext: 200,
    fadeColor: true,
  },
  {
    id: 3,
    text: 'Each ship has its own set of rules and is moderated by the orbs onboard.',
    delayNext: 200,
    fadeColor: true,
  },
  {
    id: 4,
    text: 'You and your orb can always change ships.',
    delayNext: 200,
    fadeColor: true,
    fontWeight: '500',
  },
  {
    id: 5,
    text: 'Press and hold your orb to choose a ship...',
    delayNext: 200,
    fadeColor: true,
    fontWeight: '500',
    color: DarkAppColors.tessarak,
  },
];

const SLIDE_4_LINES: TessaMessageLine[] = [
  {
    id: 1,
    text: 'Choose a ship...',
    delayNext: 200,
    fadeColor: true,
  },
];

interface Slide {
  index: number;
  lines: TessaMessageLine[];
  lineIndex: number;
  inputDisabled: boolean;
}

const SLIDES: Slide[] = [
  {index: 0, lines: SLIDE_1_LINES, lineIndex: 0, inputDisabled: true},
  {index: 1, lines: SLIDE_2_LINES, lineIndex: 0, inputDisabled: true},
  {index: 2, lines: SLIDE_3_LINES, lineIndex: 0, inputDisabled: true},
  {index: 3, lines: SLIDE_4_LINES, lineIndex: 0, inputDisabled: true},
];

const IntroScreen = () => {
  const {colors} = useContext(AppContext);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [slide, setSlide] = useState(SLIDES[0]);
  const [startTyping, setStartTyping] = useState(false);
  const [showRocket, setShowRocket] = useState(false);
  const [showRocketOptions, setShowRocketOptions] = useState(false);

  const orbPaddingBottomCursor = useSharedValue(0);

  useEffect(() => {
    delayStartTyping();
    handleSlideUpdates();
  }, []);

  useEffect(() => {
    handleSlideUpdates();
  }, [slide]);

  async function delayStartTyping() {
    await tkDelay(1500);
    setStartTyping(true);
  }

  const handleSlideUpdates = useCallback(() => {
    if (slide.inputDisabled && slide.lineIndex >= slide.lines.length - 1) {
      setSlide({...slide, inputDisabled: false});
    }

    if (slide.index === 0 && slide.lineIndex === 0) {
      orbPaddingBottomCursor.value = withSpring(insets.bottom + 200);
    }

    // if (slide.index === 0 && slide.lineIndex === 4) {
    //   orbPaddingBottomCursor.value = withSpring(insets.bottom + 150);
    // }

    if (slide.index === 1 && slide.lineIndex === 2) {
      setShowRocket(true);
      orbPaddingBottomCursor.value = withSpring(insets.bottom + 200);
    }

    if (slide.index === 2 && slide.lineIndex === 3) {
      orbPaddingBottomCursor.value = withSpring(insets.bottom + 200);
    }

    if (slide.index === 2 && slide.lineIndex === 4) {
      setShowRocket(false);
    }

    if (slide.index === 3 && slide.lineIndex === 0) {
      orbPaddingBottomCursor.value = withSpring(insets.bottom);
      tkDelay(100).then(() => setShowRocketOptions(true));
    }
  }, [slide]);

  const nextLine = useCallback(() => {
    if (slide.lineIndex < slide.lines.length - 1) {
      setSlide({...slide, lineIndex: slide.lineIndex + 1});
    }
  }, [slide]);

  const animatedBottomPadding = useAnimatedStyle(() => {
    return {
      paddingBottom: orbPaddingBottomCursor.value,
    };
  });

  const handleOrbLongPress = useCallback(async () => {
    if (slide.inputDisabled) {
      return;
    }
    await tkDelay(500);
    setSlide(SLIDES[slide.index + 1]);
    delayStartTyping();
  }, [slide]);

  return (
    <SafeScreen>
      <Animated.View
        style={{flex: 1, paddingHorizontal: 12}}
        entering={FadeIn.duration(300)}>
        <View
          style={{
            paddingTop: 20,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View>
            <Text
              variant="titleLarge"
              style={{
                fontWeight: 'bold',
                color: '#c66ef1',
                textAlign: 'center',
              }}>
              Tessarak
            </Text>
            {slide.index === 3 && (
              <Animated.View
                entering={FadeIn.duration(600)}
                exiting={FadeOut.duration(600)}>
                <Text
                  variant="titleMedium"
                  style={{
                    fontWeight: 'bold',
                    color: colors.text,
                    textAlign: 'center',
                  }}>
                  choose a ship
                </Text>
              </Animated.View>
            )}
          </View>
        </View>
        {SLIDES.map((s, slideIndex) => (
          <View key={`slide-${slideIndex}`}>
            {startTyping && slideIndex === slide.index && slideIndex !== 3 && (
              <Animated.View
                entering={FadeInLeft.duration(1000)}
                exiting={FadeOutLeft.duration(600)}
                style={{
                  marginBottom: 40,
                  marginTop: 20,
                  paddingHorizontal: 12,
                }}>
                {slide.lines.map((line, lineIndex) => {
                  return (
                    <View key={line.id} style={staticStyles.lineContainer}>
                      {slide.lineIndex >= lineIndex && (
                        <TessaLine
                          // key={`slide::line-${slideIndex}::${lineIndex}`}
                          line={line}
                          onDoneTyping={nextLine}
                        />
                      )}
                    </View>
                  );
                })}
              </Animated.View>
            )}
          </View>
        ))}
        {showRocketOptions && (
          <Animated.View
            style={{marginTop: 8}}
            entering={FadeInRight.duration(600)}
            exiting={FadeOutRight.duration(600)}>
            <List.Section
              style={{
                borderRadius: 4,
                backgroundColor: '#3d3d3d',
                paddingHorizontal: 12,
                paddingVertical: 2,
              }}>
              <List.Subheader style={{color: colors.text}}>
                Community Ships{' '}
                <Text
                  variant="bodySmall"
                  style={{color: colors.text, fontWeight: 'bold'}}>
                  - FREE TO BOARD
                </Text>
              </List.Subheader>
              <TouchableOpacity
                onPress={() => {
                  //@ts-ignore
                  navigation.navigate('BoardShip');
                }}>
                <List.Item
                  titleStyle={{color: colors.text, fontWeight: 'bold'}}
                  title="The Nebuchadnezzar"
                  descriptionStyle={{color: colors.text}}
                  description="Owner: The Tessarak Foundation"
                  left={() => <List.Icon color={'#bb9604'} icon="bell" />}
                  right={() => (
                    <List.Icon color={colors.text} icon="arrow-right" />
                  )}
                />
              </TouchableOpacity>
              <Divider style={{marginTop: 16}} />
              <TouchableOpacity
                onPress={() => {
                  //@ts-ignore
                  navigation.navigate('NbzLandingScreen');
                }}>
                <List.Item
                  titleStyle={{color: colors.text}}
                  title="More Options"
                  // left={() => (
                  //   <List.Icon color={colors.text} icon="dots-vertical" />
                  // )}
                  right={() => (
                    <List.Icon color={colors.text} icon="arrow-right" />
                  )}
                />
              </TouchableOpacity>
            </List.Section>
            <List.Section
              style={{
                borderRadius: 4,
                backgroundColor: '#3d3d3d',
                paddingHorizontal: 12,
                paddingVertical: 2,
                marginTop: -2,
              }}>
              <List.Subheader style={{color: colors.text}}>
                Ship Builders{' '}
                <Text variant="bodySmall" style={{color: colors.text}}>
                  (not yet available)
                </Text>
              </List.Subheader>
              <TouchableOpacity onPress={() => Alert.alert('In progress.')}>
                <List.Item
                  titleStyle={{color: colors.text, fontWeight: 'bold'}}
                  title="The Tessarak Foundation"
                  descriptionStyle={{color: colors.text}}
                  description="Custom, infra-managed ships for $X/mo and up."
                  left={() => (
                    <List.Icon color={colors.tessarak} icon="cube-outline" />
                  )}
                  right={() => (
                    <List.Icon color={colors.text} icon="arrow-right" />
                  )}
                />
              </TouchableOpacity>
              <Divider style={{marginTop: 16}} />
              <TouchableOpacity
                onPress={() => {
                  //@ts-ignore
                  navigation.navigate('NbzLandingScreen');
                }}>
                <List.Item
                  titleStyle={{color: colors.text}}
                  title="More Options"
                  // left={() => (
                  //   <List.Icon color={colors.text} icon="dots-vertical" />
                  // )}
                  right={() => (
                    <List.Icon color={colors.text} icon="arrow-right" />
                  )}
                />
              </TouchableOpacity>
            </List.Section>
            <List.Section
              style={{
                borderRadius: 4,
                backgroundColor: '#3d3d3d',
                paddingHorizontal: 12,
                paddingVertical: 2,
                marginTop: -2,
              }}>
              <List.Subheader style={{color: colors.text}}>
                Private Ships{' '}
                <Text variant="bodySmall" style={{color: colors.text}}>
                  (not yet available)
                </Text>
              </List.Subheader>
              <TouchableOpacity onPress={() => Alert.alert('In progress.')}>
                <List.Item
                  titleStyle={{color: colors.text, fontWeight: 'bold'}}
                  title="BYOS"
                  descriptionStyle={{color: colors.text}}
                  description="Board a non-community ship."
                  left={() => (
                    <List.Icon color={colors.text} icon="rocket-outline" />
                  )}
                  right={() => (
                    <List.Icon color={colors.text} icon="arrow-right" />
                  )}
                />
              </TouchableOpacity>
            </List.Section>
          </Animated.View>
        )}
        <View style={{flex: 1}} />
        <Animated.View
          entering={FadeInDown.duration(1000)}
          style={[
            {
              paddingHorizontal: 12,
              flexDirection: 'row',
              justifyContent: 'center',
            },
            animatedBottomPadding,
          ]}>
          <TouchableOpacity
            style={{width: 100, height: 100}}
            onLongPress={handleOrbLongPress}
            onPress={() => triggerImpactLight()}>
            <PulseIndicator color={colors.bizarroTessarak} size={100} />
            {showRocket && (
              <Animated.View
                entering={FadeInUp.duration(1000)}
                exiting={FadeOutDown.duration(1000)}
                style={{position: 'absolute', top: -25, left: -39, bottom: 0}}>
                <IconButton
                  icon="rocket-outline"
                  iconColor={colors.tessarak}
                  size={150}
                />
              </Animated.View>
            )}
          </TouchableOpacity>
        </Animated.View>
        <View style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <IconButton
              icon="close"
              iconColor={colors.text}
              size={30}
              onPress={() => navigation.goBack()}
            />
          </View>
          <StartFooter />
        </View>
      </Animated.View>
    </SafeScreen>
  );
};

const staticStyles = StyleSheet.create({
  tessaText: {
    fontWeight: '500',
    fontSize: 20,
  },
  buttonContainer: {
    marginTop: 24,
    paddingHorizontal: '10%',
  },
  lineContainer: {
    paddingHorizontal: 10,
  },
});

export default IntroScreen;
