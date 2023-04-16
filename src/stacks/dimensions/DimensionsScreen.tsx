import React, {useContext, useEffect, useState} from 'react';
import {Divider, IconButton, ProgressBar, Text} from 'react-native-paper';
import {AppContext} from '@app-ctx';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {getDimensions2} from '../../services/content';
import Animated, {
  FadeInRight,
  FadeOutRight,
} from 'react-native-reanimated';
import { ContentFeedContext } from '../content-feed/ContentFeedStack';

const DimensionsScreen = () => {
  const {colors} = useContext(AppContext);
  const {setSelectedDimension} = useContext(ContentFeedContext);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [loading, setLoading] = useState(true);
  const [errorLoading, setErrorLoading] = useState<any>(null);
  const [dimensions, setDimensions] = useState<string[] | null>(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    setErrorLoading(null);
    try {
      const result = await getDimensions2();
      setDimensions(result);
    } catch (error: any) {
      setErrorLoading(error);
    } finally {
      setLoading(false);
    }
  }

  function chooseDimension(dimension: string) {
    setSelectedDimension(dimension);
    navigation.goBack();
  }

  return (
    <View
      style={{backgroundColor: colors.bg1, flex: 1, paddingTop: insets.top}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconButton
          icon="close"
          iconColor={colors.bizarroTessarak}
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text
          variant="headlineSmall"
          style={{
            fontWeight: 'bold',
            color: colors.text,
            flex: 1,
          }}>
          Dimensions
        </Text>
      </View>
      <Divider />
      {loading && (
        <Animated.View
          exiting={FadeOutRight.duration(600)}
          entering={FadeInRight.duration(600)}>
          <ProgressBar indeterminate color={colors.bizarroTessarak} />
        </Animated.View>
      )}
      {dimensions && (
        <ScrollView style={{paddingVertical: 20}}>
          {dimensions.map((dimension, index) => (
            <TouchableOpacity
              key={dimension}
              onPress={() => chooseDimension(dimension)}
              style={{
                width: '100%',
                paddingHorizontal: 12,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 12,
                }}>
                <View style={{flex: 1}}>
                  <Text
                    variant="titleLarge"
                    style={{color: colors.text, fontWeight: '600'}}>
                    ~{dimension}
                  </Text>
                </View>
              </View>
              {index < dimensions?.length - 1 && <Divider />}
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default DimensionsScreen;
