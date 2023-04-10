import React, {PropsWithChildren, useContext, useState} from 'react';
import {StyleSheet} from 'react-native';

import TypeWriter from 'react-native-typewriter';
import Animated, {
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {AppContext} from '@app-ctx';

export type TessaMessageLine = {
  id: number;
  text: string;
  fadeColor?: boolean;
  delayNext?: number;
  fontWeight?: any;
  fadeIn?: boolean;
  color?: string;
};

type TessaTextProps = PropsWithChildren<{}>;

type TessaLineProps = {
  line: TessaMessageLine;
  onDoneTyping: () => void;
};

function TessaLine({
  line,
  onDoneTyping,
}: TessaLineProps): JSX.Element {
  const {colors} = useContext(AppContext);
  const sizeCursor = useSharedValue(18);
  const colorCursor = useSharedValue(0);

  const fadeInAnimation = line.fadeIn ? FadeIn.duration(2000) : undefined;

  const [isDoneTyping, setIsDoneTyping] = useState(false);

  const staticStyles = StyleSheet.create({
    tessaText: {
      fontWeight: line.fontWeight ?? '300',
    },
    container: {
      marginBottom: 12,
    },
  });

  const animatedText = useAnimatedStyle(() => {
    // const color = line.fadeColor
    //   ? interpolateColor(colorCursor.value, [0, 150], ['#030000', '#5a5b5a'])
    //   : '#030000';
    const color = line.color ?? colors.text;
    return {
      fontSize: sizeCursor.value,
      color,
    };
  });

  function doneTyping(): void {
    setIsDoneTyping(true);
    const delay = line.delayNext ?? 1000;
    setTimeout(() => {
      onDoneTyping();
      if (line.fadeColor) {
        colorCursor.value = withDelay(1000, withTiming(150, {duration: 4000}));
      }
    }, delay);
    // sizeCursor.value = withDelay(1000, withTiming(22, {duration: 4000}));
  }

  const TessaText = ({children}: TessaTextProps): JSX.Element => {
    return (
      <Animated.Text style={[staticStyles.tessaText, animatedText]}>
        {children}
      </Animated.Text>
    );
  };

  return (
    <Animated.View
      key={line.id}
      entering={fadeInAnimation}
      style={staticStyles.container}>
      {isDoneTyping && <TessaText>{line.text}</TessaText>}
      {!isDoneTyping && (
        <TypeWriter typing={1} onTypingEnd={doneTyping} fixed maxDelay={15}>
          <TessaText>{line.text}</TessaText>
        </TypeWriter>
      )}
    </Animated.View>
  );
}

export default TessaLine;
