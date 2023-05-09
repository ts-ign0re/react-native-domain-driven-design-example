import React from 'react';
import { Image } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import LinearGradient from "react-native-linear-gradient";
import Carousel from 'react-native-snap-carousel';
import { Card } from "../card";
import { Text } from "../text";

import * as Animatable from 'react-native-animatable';


export const LiveEventsCarousel = (props) => {

  const renderItem = ({item}) => {
    return (
      <Card borderRadius={12} height={140} width={230} justifyContent="center">
        <LinearGradient style={{ flex: 1, justifyContent: 'center' }} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[EStyleSheet.value('$brand02'), EStyleSheet.value('$brand03')]}>
          <Card position="absolute" top={8} right={8} left={8}>
            <Animatable.View animation="pulse" easing="ease" iterationCount="infinite" style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Card width={8} height={8} backgroundColor="$green" borderRadius={4} />
            </Animatable.View>
          </Card>
          <Card flex={1} alignItems="center" alignContent="center" justifyContent="center">
            <Text paddingTop={16} font="$caption02" color="$label01">{item.status_more}</Text>
            <Card flex={1}>
              <Card flex={1} flexDirection="row" justifyContent="space-around" alignItems="center" alignContent="center" paddingTop={4}>
                <Card width={45} height={45} borderRadius={22.5} backgroundColor="$brand01" justifyContent="center" alignItems="center">
                  <Image resizeMode="contain" source={{ uri: item.home_team?.logo }} style={{ width: EStyleSheet.value('35rem'), height: EStyleSheet.value('35rem') }} />
                </Card>

                <Card flexDirection="row" alignContent="center" justifyContent="center" alignItems="center">
                  <Text font="$display01" color="$label01">{item.home_score?.display}</Text>
                  <Text font="$display01" color="$label01">-</Text>
                  <Text font="$display01" color="$label01">{item.away_score?.display}</Text>
                </Card>

                <Card width={45} height={45} borderRadius={22.5} backgroundColor="$brand01" justifyContent="center" alignItems="center">
                  <Image resizeMode="contain" source={{ uri: item.away_team?.logo }} style={{ width: EStyleSheet.value('35rem'), height: EStyleSheet.value('35rem') }} />
                </Card>
              </Card>

              <Card paddingBottom={16} flexDirection="row" justifyContent="space-between" alignItems="center" alignContent="center" paddingTop={12} width={230} paddingHorizontal={16}>
                <Text numberOfLines={1} width="40%" textAlign="left" font="$caption01" color="$label01">{item.home_team?.name}</Text>
                <Text />
                <Text numberOfLines={1} width="40%" textAlign="right" font="$caption01" color="$label01">{item.away_team?.name}</Text>
              </Card>
            </Card>
          </Card>
        </LinearGradient>
      </Card>
    )
  };


  return (
    <Carousel
      data={props.data}
      renderItem={renderItem}
      sliderWidth={EStyleSheet.value('$width')}
      itemWidth={EStyleSheet.value('230rem')}
      layout="default"
      activeAnimationType="spring"
      shouldOptimizeUpdates={true}
      inactiveSlideOpacity={0.75}
      inactiveSlideScale={0.9}
      layoutCardOffset={5}
      useExperimentalSnap={true}
      activeSlideAlignment="start"
      contentContainerCustomStyle={{
        // paddingHorizontal: EStyleSheet.value('16rem'),
        paddingBottom: EStyleSheet.value('16rem'),
        paddingTop: EStyleSheet.value('4rem'),
      }}
    />
  );
}
