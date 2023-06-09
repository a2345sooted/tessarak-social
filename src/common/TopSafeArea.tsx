import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppContext} from '@app-ctx';

export function TopSafeArea(): JSX.Element {
  const {colors} = useContext(AppContext);
  return (
    <SafeAreaView
      edges={['top']}
      style={{
        flex: 0,
        backgroundColor: colors.bg1,
        maxHeight: 100,
      }}
    />
  );
}
