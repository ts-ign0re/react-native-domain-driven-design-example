import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView as RNTabView, SceneMap } from 'react-native-tab-view';


const renderScene = (config) => SceneMap(config);

type TabViewProps = {
  config: [{ key: string; title: string }];
  sceneConfig: { [key: string]: React.ReactNode };
  width: number;
  data: Array<{ sport: { name: string; }; sportId: number; events: Array<Record<string, unknown>> }>;
}

export function TabView(props: TabViewProps) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(props.config);
  return (
    <RNTabView
      navigationState={{ index, routes }}
      renderScene={renderScene(props.sceneConfig)}
      onIndexChange={setIndex}
      initialLayout={{ width: props.width }}
    />
  );
}