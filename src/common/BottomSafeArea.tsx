import React, {PropsWithChildren, useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopSafeArea from './TopSafeArea';
import {AppContext} from '@app-ctx';

function BottomSafeArea(props: PropsWithChildren): JSX.Element {
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

export default BottomSafeArea;
