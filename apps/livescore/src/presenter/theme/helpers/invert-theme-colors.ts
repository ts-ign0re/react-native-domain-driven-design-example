import dark from '../palette/dark.json';
import {ThemeColors, ThemeColorsInverted} from '../types';

export function mixInvertedTheme(
  selectedTheme: typeof dark,
  invertedTheme: typeof dark,
): ThemeColors & ThemeColorsInverted {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const invertedColors: ThemeColorsInverted = {};
  Object.entries(invertedTheme).forEach(entry => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    invertedColors[`${entry[0]}-inverted`] = entry[1];
  });

  return Object.assign(selectedTheme, invertedColors);
}
