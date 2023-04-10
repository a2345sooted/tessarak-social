import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {SafeScreen} from '@common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeOutLeft,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {PulseIndicator} from 'react-native-indicators';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {tkDelay} from '@utils';
import TessaLine, {TessaMessageLine} from './TessaLine';
import {triggerImpactLight, triggerImpactMedium} from '@haptic';

interface StartFooterProps {}

function StartFooter({}: StartFooterProps) {
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

const SLIDE_1: TessaMessageLine[] = [
  {
    id: 1,
    text: 'That is your orb.',
    delayNext: 200,
    fadeColor: true,
  },
  {
    id: 2,
    text: 'Your orb holds everything you do in the Tessarak.',
    delayNext: 200,
    fadeColor: true,
  },
  {
    id: 3,
    text: 'All of your likes, posts, comments, followers, everything!',
    delayNext: 700,
  },
  {
    id: 4,
    text: 'In the Tessarak, your orb IS your identity and it belongs to you.',
    delayNext: 400,
    fontWeight: '500',
  },
  {
    id: 5,
    text: 'Press and hold your orb to continue...',
    delayNext: 400,
    fontWeight: '500',
  },
];

const SLIDE_2: TessaMessageLine[] = [
  {
    id: 1,
    text: 'Your orb is precious because...',
    delayNext: 200,
    fadeColor: true,
  },
];

const IntroScreenOne = () => {
  const {colors} = useContext(AppContext);

  const [slideNumber, setSlideNumber] = useState(1);

  const [lineIndex, setLineIndex] = useState(0);
  const [lines, setLines] = useState(SLIDE_1);
  const [startTyping, setStartTyping] = useState(false);
  const [isDoneTyping, setIsDoneTyping] = useState(false);
  const [showRocket, setShowRocket] = useState(false);

  const orbPaddingBottomCursor = useSharedValue(0);

  useEffect(() => {
    tkDelay(2000).then(() => setStartTyping(true));
    orbPaddingBottomCursor.value = withSpring(200);
  }, []);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      setIsDoneTyping(true);
    }
    if (lineIndex == 3) {
      orbPaddingBottomCursor.value = withSpring(150);
    }
  }, [lines, lineIndex]);

  const nextLine = useCallback(() => {
    if (lineIndex < lines.length) {
      setLineIndex(lineIndex + 1);
    }
    if (lineIndex >= lines.length) {
      setIsDoneTyping(true);
    }
  }, [lines, lineIndex, slideNumber]);

  useEffect(() => {
    if (isDoneTyping) {
      // setSlideNumber(slideNumber + 1);
      // setShowRocket(true);
    }
  }, [isDoneTyping]);

  const animatedBottomPadding = useAnimatedStyle(() => {
    return {
      paddingBottom: orbPaddingBottomCursor.value,
    };
  });

  function handleLongPressOne() {
    setStartTyping(false);
    setIsDoneTyping(false);
    setSlideNumber(slideNumber + 1);
    setLines(SLIDE_2);
      orbPaddingBottomCursor.value = withSpring(220);
    tkDelay(600).then(() => setStartTyping(true));
  }

  return (
    <SafeScreen>
      <Animated.View
        style={{flex: 1, paddingHorizontal: 30}}
        entering={FadeIn.duration(300)}>
        <View
          style={{
            paddingTop: 100,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            variant="titleLarge"
            style={{fontWeight: 'bold', color: '#c66ef1'}}>
            Tessarak
          </Text>
        </View>
        {startTyping && (
          <Animated.View
            entering={FadeInLeft.duration(1000)}
            exiting={FadeOutLeft.duration(600)}
            style={{
              marginBottom: 40,
              marginTop: 20,
              paddingHorizontal: 12,
            }}>
            {lines.map((line, index) => {
              return (
                <View key={line.id} style={staticStyles.lineContainer}>
                  {lineIndex >= index && (
                    <TessaLine line={line} onDoneTyping={nextLine} />
                  )}
                </View>
              );
            })}
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
            onLongPress={handleLongPressOne}
            onPress={() => triggerImpactLight()}>
            <PulseIndicator color={colors.bizarroTessarak} size={100} />
            {showRocket && (
              <Animated.View
                entering={FadeIn.duration(1000)}
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
        <StartFooter />
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

export default IntroScreenOne;
