import React from 'react';
import { Image, TouchableOpacity } from "react-native";
import { Card } from "../card";
import { Text } from "../text";
import LinearGradient from "react-native-linear-gradient";
import EStyleSheet from "react-native-extended-stylesheet";

const SelectorRoundLogoSelected = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={1}>
      <>
        <LinearGradient colors={[EStyleSheet.value('$brand02'), EStyleSheet.value('$brand03')]} style={{ marginHorizontal: EStyleSheet.value('12rem'), marginVertical: EStyleSheet.value('12rem'), borderRadius: EStyleSheet.value('47rem'), width: EStyleSheet.value('94rem'), height: EStyleSheet.value('94rem'), alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <Card borderRadius={94 / 2} width={94} height={94} backgroundColor="transparent" alignItems="center" justifyContent="center" marginHorizontal={12} marginVertical={12}>
            <Card width={54} height={54} borderRadius={54 / 2} backgroundColor="$ui03">
              <Image source={{ uri: props.logo }} />
            </Card>
          </Card>
        </LinearGradient>
        <Text textAlign="center" font="$heading03" color="$label01">{props.name}</Text>
      </>
    </TouchableOpacity>
  );
}

export const SelectorRoundLogo = (props) => {

  if (props.selected) return (<SelectorRoundLogoSelected {...props} />);

  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={1}>
      <>
        <Card borderRadius={94 / 2} width={94} height={94} backgroundColor="$ui02" alignItems="center" justifyContent="center" marginHorizontal={12} marginVertical={12}>
          <Card width={54} height={54} borderRadius={54 / 2} backgroundColor="$ui03">
            <Image source={{ uri: props.logo }} />
          </Card>
        </Card>
        <Text textAlign="center" font="$heading03" color="$label01">{props.name}</Text>
      </>
    </TouchableOpacity>
  );
}
