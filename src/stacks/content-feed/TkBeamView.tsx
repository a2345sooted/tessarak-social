import React, {useContext} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {AppContext} from '@app-ctx';
import {TkBeam} from '../../services/content';
import {Text} from 'react-native-paper';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export interface TkBeamViewProps {
  content: TkBeam;
}

export function TkBeamView({content}: TkBeamViewProps): JSX.Element {
  const {colors} = useContext(AppContext);
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colors.bg1, justifyContent: 'center'},
      ]}>
      <Text
        variant="headlineSmall"
        style={{
          fontWeight: 'bold',
          color: colors.text,
          textAlign: 'center',
        }}>
        Beam
      </Text>
      <Text
        variant="headlineSmall"
        style={{
          fontWeight: 'bold',
          color: colors.text,
          textAlign: 'center',
        }}>
        {content.url}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
});
