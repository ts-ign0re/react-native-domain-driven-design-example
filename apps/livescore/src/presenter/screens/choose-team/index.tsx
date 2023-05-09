import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text } from "../../components";
import { Card } from "../../components/card";
import { useNavigationOptions } from "./hooks/useNavigationOptions";
import { Button } from "../../components/button";
import { NewUserContainer } from "../../containers";
import { FlatList } from "react-native";
import { SelectorRoundLogo } from "../../components/selector-round-logo";
import { isFunction } from "lodash";

const ChooseTeamScreenView = (props) => {
  useNavigationOptions();
  return (
    <SafeAreaProvider>
      <Card paddingHorizontal={16} justifyContent="space-around" flex={1} paddingVertical={20} marginTop={60}>
        <Card justifyContent="flex-start" flex={1}>
          <Text font="$display02" textAlign="center">Which Sport Would You Like to Follow?</Text>
        </Card>

        <FlatList contentContainerStyle={{ justifyContent: 'space-around', alignItems: 'center', alignContent: 'center' }} numColumns={3} data={props.sports} renderItem={({ item }) => (
          <SelectorRoundLogo onPress={() => item.selected ? props.unselectSport(item) : props.selectSport(item)} key={item.id} {...item} />
        )} />

        <Button loading={props.loading} marginTop={32} label="Done" onPress={() => {
          isFunction(props.goBack) && props.goBack();
          isFunction(props.finishRegistration) && props.finishRegistration();
        }} size="large" type="primary" marginBottom={32} />
      </Card>
    </SafeAreaProvider>
  )
}

export const ChooseTeamScreen = NewUserContainer(ChooseTeamScreenView);