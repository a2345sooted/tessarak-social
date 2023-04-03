import React, {PropsWithChildren, useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppContext} from '@app-ctx';
import { TopSafeArea } from './TopSafeArea';

export function BottomSafeArea(props: PropsWithChildren): JSX.Element {
  const {colors, statusBar} = useContext(AppContext);
  return (
    <>
      <TopSafeArea />
      <SafeAreaView
        // edges={['left', 'right', 'bottom']}
        edges={['left', 'right']}
        style={{
          flex: 1,
          backgroundColor: colors.bg1,
          position: 'relative',
        }}>
        {statusBar}
        {props.children}
      </SafeAreaView>
    </>
  );
}
