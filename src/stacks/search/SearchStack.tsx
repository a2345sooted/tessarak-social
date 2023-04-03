import React from 'react';
import SearchScreen from './SearchScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SearchNavStack = createNativeStackNavigator();

function SearchStack() {
  return (
    <SearchNavStack.Navigator initialRouteName="SearchScreen">
      <SearchNavStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
    </SearchNavStack.Navigator>
  );
}

export default SearchStack;
