import React from 'react';
import { NavigationContainer, Theme } from "@react-navigation/native";
import { TabNavigator } from './tab-navigator';
import { useTheme } from "../theme";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";
import { AuthNavigator } from "./auth-navigator";

export const Navigation = () => {
  const { theme: applicationTheme, colors } = useTheme();
  const authentication = useSelector<{ authentication: Record<string, any> }>(state => state.authentication);
  const theme: Theme = {
    dark: applicationTheme === 'dark',
    colors: {
      primary: colors.$brand01,
      background: colors.$ui01,
      card: colors.$ui01,
      text: colors.$label01,
      border: colors.$ui02,
      notification: colors.$brand03,
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer theme={theme}>
        {/* eslint-disable-next-line */}
        {/* @ts-ignore */}
        {authentication?.isAuthenticated ? <TabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  )
}