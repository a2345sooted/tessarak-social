import React, {useContext, useRef} from 'react';
import { Avatar, Divider, IconButton, Text } from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {Alert, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ActionSheetRef} from 'react-native-actions-sheet';

const BottomCaptionBar = () => {
  const {colors} = useContext(AppContext);
  const soundActionSheet = useRef<ActionSheetRef>(null);
  const commentsActionSheet = useRef<ActionSheetRef>(null);
  // const longPressActionSheet = useRef<ActionSheetRef>(null);
  const shareActionSheet = useRef<ActionSheetRef>(null);

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 95 + 25,
        left: 12,
        width: '100%',
        zIndex: 1000,
      }}>
      <View
        style={{
          width: '70%',
        }}>
        <View>
          <Text
            variant="titleMedium"
            style={{fontWeight: 'bold', color: colors.text}}>
            @geo_stokes@tessarak.org
          </Text>
        </View>
          <Divider style={{marginVertical: 8}}/>
        <View>
          <Text variant="titleSmall" style={{color: colors.text}}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque.
          </Text>
          {/*<Text variant="titleSmall" style={{color: colors.text}}>*/}
          {/*  Sed ut perspiciatis unde omnis iste natus error sit voluptatem*/}
          {/*  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa*/}
          {/*  quae ab illo inventore veritatis et quasi architecto beatae vitae*/}
          {/*  dicta sunt explicabo.*/}
          {/*</Text>*/}
        </View>
        {/*<View style={{marginTop: 8}}>*/}
        {/*  <Text variant="titleSmall" style={{color: colors.text, fontWeight: 'bold'}}>*/}
        {/*    #something1 #something2 #something3*/}
        {/*  </Text>*/}
        {/*</View>*/}
        {/*<View style={{marginTop: 8}}>*/}
        {/*  <Text variant="titleSmall" style={{color: colors.text, fontWeight: 'bold'}}>*/}
        {/*    @somebody@place1.com @somebody@place2.com @somebody@place3.com*/}
        {/*  </Text>*/}
        {/*</View>*/}
        {/*<View style={{marginTop: 8}}>*/}
        {/*  <Text variant="titleSmall" style={{color: colors.text, fontWeight: 'bold'}}>*/}
        {/*    Stitch of: [some content link]*/}
        {/*  </Text>*/}
        {/*</View>*/}
      </View>
    </View>
  );
};

export default BottomCaptionBar;
