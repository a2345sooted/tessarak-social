import React, {useContext, useRef} from 'react';
import {Avatar, IconButton, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import { Alert, View } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ActionSheetRef} from 'react-native-actions-sheet';

interface SideActionProps {
  icon: string;
  count: number | undefined;
}

function SideAction({icon, count, source}: SideActionProps) {
  const {colors} = useContext(AppContext);
  return (
    <TouchableOpacity onPress={() => {}}>
      <IconButton icon={icon} iconColor={colors.text} size={35} />
      {count && (
        <Text
          variant="labelSmall"
          style={{
            color: colors.text,
            fontWeight: 'bold',
            marginTop: -12,
            textAlign: 'center',
          }}>
          {count}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export interface SideActionBarProps {
  source?: string;
}

const SideActionBar = ({source}: SideActionBarProps) => {
  const soundActionSheet = useRef<ActionSheetRef>(null);
  const commentsActionSheet = useRef<ActionSheetRef>(null);
  const shareActionSheet = useRef<ActionSheetRef>(null);

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 25,
        right: 15,
        width: 50,
        zIndex: 1000,
      }}>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
        {/*<SideAction icon={'music'} count={undefined} />*/}
        {/*<SideAction icon={'bookmark'} count={1577} />*/}
        {/*<SideAction icon={'heart'} count={10455} />*/}
        {/*<SideAction icon={'message-text'} count={492} />*/}
        {/*<SideAction icon={'share-circle'} count={177} />*/}
        <View style={{marginHorizontal: 12, marginTop: 12}}>
          <TouchableOpacity
            onPress={() => {
              // //@ts-ignore
              // navigation.navigate('User');
                Alert.alert("View the creator's profile -- Not yet implemented.");
            }}>
            {source && <Avatar.Image size={50} source={{uri: source}} />}
            {!source && <Avatar.Text size={50} label="XD" />}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  // return (
  //   <View
  //     style={{
  //       position: 'absolute',
  //       bottom: 95 + 35,
  //       left: 0,
  //       width: '100%',
  //       zIndex: 1000,
  //     }}>
  //     <View
  //       style={{
  //         flexDirection: 'row',
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //         paddingBottom: 12,
  //         width: '100%',
  //       }}>
  //       <IconButton
  //         icon="music"
  //         iconColor={colors.bizarroTessarak}
  //         size={25}
  //         onPress={() => soundActionSheet.current?.show()}
  //       />
  //       <IconButton
  //         icon="heart"
  //         iconColor={colors.bizarroTessarak}
  //         size={25}
  //         onPress={() => {
  //           Alert.alert('Like');
  //         }}
  //       />
  //       <View style={{marginHorizontal: 12}}>
  //         <TouchableOpacity
  //           onPress={() => {
  //             //@ts-ignore
  //             navigation.navigate('User');
  //           }}>
  //           <Avatar.Text size={50} label="XD" />
  //         </TouchableOpacity>
  //       </View>
  //       <IconButton
  //         icon="comment"
  //         iconColor={colors.bizarroTessarak}
  //         size={25}
  //         onPress={() => commentsActionSheet.current?.show()}
  //       />
  //       <IconButton
  //         icon="share"
  //         iconColor={colors.bizarroTessarak}
  //         size={25}
  //         onPress={() => shareActionSheet.current?.show()}
  //       />
  //     </View>
  //   </View>
  // );
};

export default SideActionBar;

//
//
//
// {/*<View*/}
// {/*  style={{paddingHorizontal: 40, flex: 1, backgroundColor: colors.bg1}}>*/}
// {/*  <PagerView*/}
// {/*    initialPage={0}*/}
// {/*    style={{flex: 1, backgroundColor: colors.bg1}}*/}
// {/*    orientation="vertical">*/}
// {/*    <View*/}
// {/*      key="1"*/}
// {/*      style={{*/}
// {/*        flex: 1,*/}
// {/*        justifyContent: 'center',*/}
// {/*        // backgroundColor: colors.bg1,*/}
// {/*      }}>*/}
// {/*      <Text*/}
// {/*        variant="bodyLarge"*/}
// {/*        style={{*/}
// {/*          fontWeight: 'bold',*/}
// {/*          color: colors.text,*/}
// {/*          textAlign: 'center',*/}
// {/*        }}>*/}
// {/*        Content 1*/}
// {/*      </Text>*/}
// {/*    </View>*/}
// {/*    <View*/}
// {/*      key="2"*/}
// {/*      style={{*/}
// {/*        flex: 1,*/}
// {/*        justifyContent: 'center',*/}
// {/*        // backgroundColor: colors.bg1,*/}
// {/*      }}>*/}
// {/*      <Text*/}
// {/*        variant="bodyLarge"*/}
// {/*        style={{*/}
// {/*          fontWeight: 'bold',*/}
// {/*          color: colors.text,*/}
// {/*          textAlign: 'center',*/}
// {/*        }}>*/}
// {/*        Content 2*/}
// {/*      </Text>*/}
// {/*    </View>*/}
// {/*  </PagerView>*/}
// {/*</View>*/}
// {/*<TopBar />*/}
// {/*<BottomBar />*/}
// {/*<ActionSheet*/}
// {/*  ref={soundActionSheet}*/}
// {/*  containerStyle={{backgroundColor: colors.bg1}}*/}
// {/*  elevation={12}>*/}
// {/*  <Text*/}
// {/*    variant="headlineSmall"*/}
// {/*    style={{*/}
// {/*      fontWeight: 'bold',*/}
// {/*      color: colors.text,*/}
// {/*      textAlign: 'center',*/}
// {/*      marginTop: 30,*/}
// {/*    }}>*/}
// {/*    TikTok like sound section.*/}
// {/*  </Text>*/}
// {/*  <View style={{height: '60%'}} />*/}
// {/*</ActionSheet>*/}
// {/*<ActionSheet*/}
// {/*  ref={commentsActionSheet}*/}
// {/*  containerStyle={{backgroundColor: colors.bg1}}*/}
// {/*  elevation={12}>*/}
// {/*  <Text*/}
// {/*    variant="headlineSmall"*/}
// {/*    style={{*/}
// {/*      fontWeight: 'bold',*/}
// {/*      color: colors.text,*/}
// {/*      textAlign: 'center',*/}
// {/*      marginTop: 30,*/}
// {/*    }}>*/}
// {/*    Comments section.*/}
// {/*  </Text>*/}
// {/*  <View style={{height: '60%'}} />*/}
// {/*</ActionSheet>*/}
// {/*<ActionSheet*/}
// {/*  ref={longPressActionSheet}*/}
// {/*  containerStyle={{backgroundColor: colors.bg1}}*/}
// {/*  elevation={12}>*/}
// {/*  <Text*/}
// {/*    variant="headlineSmall"*/}
// {/*    style={{*/}
// {/*      fontWeight: 'bold',*/}
// {/*      color: colors.text,*/}
// {/*      textAlign: 'center',*/}
// {/*      marginTop: 30,*/}
// {/*    }}>*/}
// {/*    Video context section and other actions for the video, sorta like*/}
// {/*    TikTok.*/}
// {/*  </Text>*/}
// {/*  <View style={{height: '40%'}} />*/}
// {/*</ActionSheet>*/}
// {/*<ActionSheet*/}
// {/*  ref={shareActionSheet}*/}
// {/*  containerStyle={{backgroundColor: colors.bg1}}*/}
// {/*  elevation={12}>*/}
// {/*  <Text*/}
// {/*    variant="headlineSmall"*/}
// {/*    style={{*/}
// {/*      fontWeight: 'bold',*/}
// {/*      color: colors.text,*/}
// {/*      textAlign: 'center',*/}
// {/*      marginTop: 30,*/}
// {/*    }}>*/}
// {/*    TikTok-like share section.*/}
// {/*  </Text>*/}
// {/*  <View style={{height: '45%'}} />*/}
// {/*</ActionSheet>*/}
