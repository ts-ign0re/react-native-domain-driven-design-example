import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "../../components";
import { Card } from "../../components/card";
import { TextInput } from "../../components/text-input";
import { TextInputSecure } from "../../components/text-input-secure";
import { useNavigationOptions } from "./hooks/useNavigationOptions";
import { Button } from "../../components/button";
import { NewUserContainer } from "../../containers";
import { useSideEffect } from "./hooks/useSideEffect";

const SignUpScreenView = (props) => {
  const { goToSignIn } = useNavigationOptions();

  useSideEffect(props);

  return (
    <SafeAreaProvider>
      <Card paddingHorizontal={16} justifyContent="space-around" flex={1} paddingVertical={20}>
        <Card justifyContent="flex-start" flex={1}>
          <Text font="$display03">Create Your</Text>
          <Text font="$display03">Account</Text>

          <Text font="$body02" color="$label01" marginTop={16} marginBottom={24} marginRight={30}>
            Create a new account to get information about football
          </Text>
          <TextInput label="Username" returnKeyType="next" />
          <TextInput label="Email" autoComplete="email" keyboardType="email-address" returnKeyType="next" marginTop={16} />
          <TextInputSecure label="Password" returnKeyType="done" marginTop={16} />

          <Card flexDirection="row" justifyContent="space-between" alignItems="center" marginTop={24}>
            <Text font="$body02" textAlign="center" width="100%">
                By Singing up, you're agree to our <Text color="$brand01">Terms &
                Conditions</Text> and <Text color="$brand01">Privacy Policy</Text>
            </Text>
          </Card>
        </Card>

        <Button loading={props.loading} marginTop={32} label="Sign Up" onPress={() => props.register({ username: 'test_user', password: 'test_password', email: 'test@user.email' })} size="large" type="primary" />
        <Button marginTop={32} label="Sign In" onPress={goToSignIn} size="medium" type="ghost" marginBottom={32} />
      </Card>
    </SafeAreaProvider>
  )
}

export const SignUpScreen = NewUserContainer(SignUpScreenView);