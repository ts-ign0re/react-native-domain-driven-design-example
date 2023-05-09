import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EStyleSheet from "react-native-extended-stylesheet";
import { HomeNavigator } from "../home-navigator";

const Tabs = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={{ lazy: false, tabBarStyle: {
      backgroundColor: EStyleSheet.value('$ui02'),
      paddingBottom: 0,
    } }}>
      <Tabs.Screen name="Home" component={HomeNavigator} />
    </Tabs.Navigator>
  );
}