import { Avatar, IconButton, ProgressBar, Text } from 'react-native-paper';
import { AppContext } from '@app-ctx';
import { Alert, Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ActionSheetRef } from 'react-native-actions-sheet';
import { FeedContent, getContent, TkBeam, TkPic, TkVideo } from '../../services/content';
import { TkPicView } from './TkPicView';
import { TkBeamView } from './TkBeamView';
import { TkVideoView } from './TkVideoView';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const FeedScreen = () => {
  const {colors} = useContext(AppContext);

  const insets = useSafeAreaInsets();

  const navigation = useNavigation();
  const soundActionSheet = useRef<ActionSheetRef>(null);
  const commentsActionSheet = useRef<ActionSheetRef>(null);
  const longPressActionSheet = useRef<ActionSheetRef>(null);
  const shareActionSheet = useRef<ActionSheetRef>(null);

  const [content, setContent] = useState<FeedContent[] | null>(null);
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [errorLoadingContent, setErrorLoadingContent] = useState<any>(null);

  useEffect(() => {
    loadContent();
  }, []);

  async function loadContent() {
    setIsLoadingContent(true);
    setErrorLoadingContent(null);
    try {
      const result = await getContent();
      setContent(result.items);
    } catch (error: any) {
      setErrorLoadingContent(error);
    } finally {
      setIsLoadingContent(false);
    }
  }

  function BottomBar(): JSX.Element {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 12,
            width: '100%',
          }}>
          <IconButton
            icon="music"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => soundActionSheet.current?.show()}
          />
          <IconButton
            icon="heart"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => {
              Alert.alert('Like');
            }}
          />
          <View style={{marginHorizontal: 12}}>
            <TouchableOpacity
              onPress={() => {
                //@ts-ignore
                navigation.navigate('User');
              }}>
              <Avatar.Text size={50} label="XD" />
            </TouchableOpacity>
          </View>
          <IconButton
            icon="comment"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => commentsActionSheet.current?.show()}
          />
          <IconButton
            icon="share"
            iconColor={colors.bizarroTessarak}
            size={25}
            onPress={() => shareActionSheet.current?.show()}
          />
        </View>
      </View>
    );
  }

  function loadingScreen(): JSX.Element {
    return (
      <View
        style={{
          backgroundColor: colors.bg1,
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 30,
        }}>
        <Text
          variant="headlineSmall"
          style={{
            fontWeight: 'bold',
            color: colors.text,
            textAlign: 'center',
          }}>
          Teleporting...
        </Text>
        <ProgressBar indeterminate color={colors.bizarroTessarak} />
      </View>
    );
  }

  return (
    <>
      {isLoadingContent && loadingScreen()}
      {!isLoadingContent && !errorLoadingContent && (
        <View style={{flex: 1, backgroundColor: colors.bg1}}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScrollView}>
            {/* Add horizontal pages here */}
            <View
              style={[styles.horizontalPage, {backgroundColor: colors.bg1}]}>
              <ScrollView
                pagingEnabled
                showsVerticalScrollIndicator={false}
                style={styles.verticalScrollView}>
                {content!.map(c => {
                  switch (c.type) {
                    case 'pic':
                      return <TkPicView key={c.id} content={c as TkPic} />;
                    case 'video':
                      return <TkVideoView key={c.id} content={c as TkVideo} />;
                    case 'beam':
                      return <TkBeamView key={c.id} content={c as TkBeam} />;
                  }
                })}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalScrollView: {
    flex: 1,
  },
  horizontalPage: {
    width: screenWidth,
    height: screenHeight,
  },
  verticalScrollView: {
    flex: 1,
  },
  verticalPage: {
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'center',
  },
  pageText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FeedScreen;

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
