import React, {useContext} from 'react';
import {Dimensions, Image, View} from 'react-native';
import {AppContext} from '@app-ctx';
import {TkPic} from '../../services/content';
import BottomActionBar from './BottomActionBar';

const {height: screenHeight} = Dimensions.get('window');

export interface TkPicViewProps {
  content: TkPic;
}

export function TkPicView({content}: TkPicViewProps): JSX.Element {
  const {colors} = useContext(AppContext);

  return (
    <View
      style={{
        backgroundColor: colors.bg1,
        height: screenHeight,
        paddingBottom: 95,
      }}>
      <BottomActionBar />
      <Image source={{uri: content.url}} style={{height: '100%'}} />
    </View>
  );
}
