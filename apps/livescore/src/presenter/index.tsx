import { Navigation } from './navigator';

import { enableScreens } from 'react-native-screens';
import { ThemeProvider } from "./theme";
// Enable screens
// Required for react-navigation >v5
enableScreens();

export * from './screens';
export * from './navigator';


export const Presenter = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  )
};