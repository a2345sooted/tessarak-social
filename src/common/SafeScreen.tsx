import React, {PropsWithChildren} from 'react';
import TopSafeArea from './TopSafeArea';
import BottomSafeArea from './BottomSafeArea';

function SafeScreen(props: PropsWithChildren): JSX.Element {
  return (
    <>
      <TopSafeArea />
      <BottomSafeArea>{props.children}</BottomSafeArea>
    </>
  );
}

export default SafeScreen;
