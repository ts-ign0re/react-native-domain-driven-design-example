import React from 'react';
import { SafeAreaView, ScrollView } from "react-native";
import { Text } from "../../components";
import { Card } from "../../components/card";
import { LiveEventsCarousel } from "../../components/live-events-carousel";
import { MatchItem } from "../../components/match-item";
import { HomeContainer } from "../../containers/home.container";

type HomeScreenViewProps = {
  live: [{ id: number; sport: { name: string; }, sportId: number; events: Array<Record<string, unknown>> }];
  events: { [key: string]: Array<{ sport: { name: string; }; sportId: number; events: Array<Record<string, unknown>> }> };
}

const HomeScreenView: React.FC<HomeScreenViewProps> = (props) => {
  const today = (new Date()).toISOString().split('T')[0];
  // console.log('props.events', props.events);
  return (
    <SafeAreaView>
      <ScrollView>
        <Card padding={16}>
          {props.live?.map((item) => item?.events?.length > 0 ? (
            <>
            <Text font="$button01">{item.sport.name}</Text>
            <LiveEventsCarousel key={item.id} data={item.events} />
          </>
          ) : null)}

          {props.events[today].map((item) => (
            <Card key={item.sportId}>
              <Text marginTop={8} marginBottom={4} font="$heading02">{item.sport.name}</Text>
                {item?.events
                ?.filter(i => !['finished', 'canceled', 'inprogress', 'postponed', 'canceled']
                .includes(i.status))
                ?.slice(0, 5)
                .map((event) => (<MatchItem key={event.id} {...event} />))}
            </Card>
          ))}
        </Card>
      </ScrollView>
    </SafeAreaView>
  )
}

export const HomeScreen = HomeContainer(HomeScreenView);