import React, {PropsWithChildren} from 'react';
import { BottomSafeArea } from './BottomSafeArea';

export function SafeScreen(props: PropsWithChildren): JSX.Element {
  return (
    <>
      {/*<TopSafeArea />*/}
      <BottomSafeArea>{props.children}</BottomSafeArea>
    </>
  );
}
