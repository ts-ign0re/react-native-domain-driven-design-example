import {Dimensions, Platform} from 'react-native';
import {mixInvertedTheme} from './helpers/invert-theme-colors';

// color palette
import dark from './palette/dark.json';
import light from './palette/light.json';

// fonts
export * from './typo';

export const LIGHT_THEME_COLORS = mixInvertedTheme(light, dark);
export const DARK_THEME_COLORS = mixInvertedTheme(dark, light);

export const DEFAULT_MOBILE_SCREEN_SETTINGS = {width: 375, height: 667};

export const defaultTheme = {
  $scale: 1,
  $width: Dimensions.get('screen').width,
  $height: Platform.select({
    ios: Dimensions.get('screen').height,
    android: Dimensions.get('screen').height,
  }),
};
