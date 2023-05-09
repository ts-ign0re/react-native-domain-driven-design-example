import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "../../components";
import { Card } from "../../components/card";
import { TextInput } from "../../components/text-input";
import { TextInputSecure } from "../../components/text-input-secure";
import { useNavigationOptions } from "./hooks/useNavigationOptions";
import { Button } from "../../components/button";
import { NewUserContainer } from "../../containers";
import { useSideEffect } from "../sign-up/hooks/useSideEffect";

const SignInScreenView = (props) => {
  const { goToSignUp } = useNavigationOptions();

  useSideEffect(props);

  return (
    <SafeAreaProvider>
      <Card paddingHorizontal={16} justifyContent="space-around" flex={1} paddingVertical={20}>
        <Card justifyContent="flex-start" flex={1}>
          <Text font="$display03">
            Welcome to
          </Text>
          <Text font="$display03">
            LiveScore
          </Text>

          <Text color="$label01" marginTop={16} marginBottom={24} font="$body02">
            Enter your username and password to use the application
          </Text>
          <TextInput label="Username" returnKeyType="next" />
          <TextInputSecure label="Password" returnKeyType="done" marginTop={16} />

          <Card flexDirection="row" justifyContent="space-between" alignItems="center" marginTop={24}>
            <Card flexDirection="row" justifyContent="flex-start" alignItems="center" >
            </Card>
            <Card flexDirection="row" justifyContent="flex-end" alignItems="center" >
              <Text font="$body01" marginLeft={8} color="$brand01">Forgot password?</Text>
            </Card>
          </Card>
        </Card>

        <Button marginTop={32} label="Sign In" onPress={() => props.login({ username: 'test_user', password: 'test_password' })} size="large" type="primary" />
        <Button marginTop={32} label="Sign Up" onPress={goToSignUp} size="medium" type="ghost" />

      </Card>
    </SafeAreaProvider>
  )
}

export const SignInScreen = NewUserContainer(SignInScreenView);