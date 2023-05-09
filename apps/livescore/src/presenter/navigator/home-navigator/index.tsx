import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChooseTeamScreen, HomeScreen } from "../../screens";
import { useNavigationOptions } from "./hooks/useNavigationOptions";

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
  const { goBack } = useNavigationOptions();
  const ChooseComponent = () => <ChooseTeamScreen goBack={goBack} />;
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen options={{ headerShown: false }} name="home" component={HomeScreen} />
      <Stack.Screen options={{ headerShown: true, presentation: "formSheet" }} name="choose-sport" component={ChooseComponent} />
    </Stack.Navigator>
  );
}