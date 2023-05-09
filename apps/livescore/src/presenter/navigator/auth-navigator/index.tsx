import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChooseTeamScreen, SignInScreen, SignUpScreen } from "../../screens";

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="sign-up">
      <Stack.Screen name="sign-in" component={SignInScreen} />
      <Stack.Screen name="sign-up" component={SignUpScreen} />
      <Stack.Screen name="choose-team" component={ChooseTeamScreen} />
    </Stack.Navigator>
  );
}