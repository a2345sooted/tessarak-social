import React, { useContext } from 'react';
import {ScrollView, View, StyleSheet, Dimensions, Text} from 'react-native';
import { AppContext } from '@app-ctx';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export const NestedPagingView = () => {
  const {colors} = useContext(AppContext);
  return (
    <View style={{flex: 1, backgroundColor: colors.bg1}}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScrollView}>
        {/* Add horizontal pages here */}
        <View style={[styles.horizontalPage, {backgroundColor: colors.bg1}]}>
          <ScrollView
            pagingEnabled
            showsVerticalScrollIndicator={false}
            style={styles.verticalScrollView}>
            {/* Add vertical pages here */}
            <View style={[styles.verticalPage, {backgroundColor: colors.bg1}]}>
              <Text style={styles.pageText}>Horizontal 1, Vertical 1</Text>
            </View>
            <View style={[styles.verticalPage, {backgroundColor: colors.bg1}]}>
              <Text style={styles.pageText}>Horizontal 1, Vertical 2</Text>
            </View>
          </ScrollView>
        </View>
        <View style={[styles.horizontalPage, {backgroundColor: colors.bg1}]}>
          <ScrollView
            pagingEnabled
            showsVerticalScrollIndicator={false}
            style={styles.verticalScrollView}>
            {/* Add vertical pages here */}
            <View style={[styles.verticalPage, {backgroundColor: colors.bg1}]}>
              <Text style={styles.pageText}>Horizontal 2, Vertical 1</Text>
            </View>
            <View style={[styles.verticalPage, {backgroundColor: colors.bg1}]}>
              <Text style={styles.pageText}>Horizontal 2, Vertical 2</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
