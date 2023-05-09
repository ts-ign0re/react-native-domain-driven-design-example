import React from 'react';
import { Image } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Card } from "../card";
import { Text } from "../text";


export const MatchItem = (props) => {
  console.log(props.status);
  return (
    <Card borderRadius={8} paddingVertical={16} paddingHorizontal={4} marginBottom={12} flexDirection="row" justifyContent="center" backgroundColor="$ui02">
      <Card flexDirection="row" justifyContent="flex-end" alignItems="center" paddingRight={8}>
        <Text font="$caption02" ellipsizeMode="tail" width="43%" textAlign="right" numberOfLines={2} paddingRight={8}>{props?.home_team?.name}</Text>
        <Card width={35} height={35} borderRadius={17.5} backgroundColor="$ui03" alignItems="center" justifyContent="center">
          <Image resizeMode="contain" resizeMethod="scale" source={{ uri: props.home_team.logo }} style={{ width: EStyleSheet.value('25rem'), height: EStyleSheet.value('25rem'), borderRadius: EStyleSheet.value('12.5rem') }} />
        </Card>
      </Card>

      <Card alignItems="center" justifyContent="center" paddingHorizontal={16}>
        <Text font="$caption02" ellipsizeMode="tail" numberOfLines={1}>{props?.status_more}</Text>
        <Card flexDirection="row" justifyContent="center" alignItems="center">
          <Text font="$caption02" ellipsizeMode="tail" numberOfLines={1}>{props?.home_score?.display ?? '0'}</Text>
          <Text font="$caption02" ellipsizeMode="tail" numberOfLines={1}>-</Text>
          <Text font="$caption02" ellipsizeMode="tail" numberOfLines={1}>{props?.away_score?.display ?? '0'}</Text>
        </Card>
      </Card>

      <Card flexDirection="row" justifyContent="flex-start" alignItems="center" paddingLeft={8}>
        <Card width={35} height={35} borderRadius={17.5} backgroundColor="$ui03" alignItems="center" justifyContent="center">
          <Image resizeMode="contain" resizeMethod="scale" source={{ uri: props.away_team.logo }} style={{ width: EStyleSheet.value('25rem'), height: EStyleSheet.value('25rem'), borderRadius: EStyleSheet.value('12.5rem') }} />
        </Card>
        <Text font="$caption02" ellipsizeMode="tail" width="43%" textAlign="left" numberOfLines={2} paddingLeft={8}>{props?.away_team?.name}</Text>
      </Card>
    </Card>
  )
}