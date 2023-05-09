// import {DARK_THEME_COLORS, LIGHT_THEME_COLORS} from '../configuration';
// import {Theme} from '../types';

// /**
//  *
//  * @param theme - 'light' | 'dark'
//  * @returns Theme colors
//  */
// export function returnThemeColors(theme: Theme) {
//   switch (theme) {
//     case 'light':
//       return LIGHT_THEME_COLORS;
//     case 'dark':
//       return DARK_THEME_COLORS;
//     default: {
//       throw new Error('Invalid theme');
//     }
//   }
// }

import {returnThemeColors} from './return-theme-colors';

describe('returnThemeColors', () => {
  it('should return light theme colors', () => {
    const light = returnThemeColors('light');
    expect(Object.keys(light)).toMatchInlineSnapshot(`
      [
        "$ui01",
        "$ui02",
        "$ui03",
        "$label01",
        "$label02",
        "$label03",
        "$brand01",
        "$brand02",
        "$brand03",
        "$red",
        "$orange",
        "$yellow",
        "$green",
        "$teal",
        "$blue",
        "$indigo",
        "$purple",
        "$pink",
        "$shadow",
        "$ui01-inverted",
        "$ui02-inverted",
        "$ui03-inverted",
        "$label01-inverted",
        "$label02-inverted",
        "$label03-inverted",
        "$brand01-inverted",
        "$brand02-inverted",
        "$brand03-inverted",
        "$red-inverted",
        "$orange-inverted",
        "$yellow-inverted",
        "$green-inverted",
        "$teal-inverted",
        "$blue-inverted",
        "$indigo-inverted",
        "$purple-inverted",
        "$pink-inverted",
        "$shadow-inverted",
      ]
    `);
  });

  it('should return dark theme colors', () => {
    const dark = returnThemeColors('light');
    expect(Object.keys(dark)).toMatchInlineSnapshot(`
      [
        "$ui01",
        "$ui02",
        "$ui03",
        "$label01",
        "$label02",
        "$label03",
        "$brand01",
        "$brand02",
        "$brand03",
        "$red",
        "$orange",
        "$yellow",
        "$green",
        "$teal",
        "$blue",
        "$indigo",
        "$purple",
        "$pink",
        "$shadow",
        "$ui01-inverted",
        "$ui02-inverted",
        "$ui03-inverted",
        "$label01-inverted",
        "$label02-inverted",
        "$label03-inverted",
        "$brand01-inverted",
        "$brand02-inverted",
        "$brand03-inverted",
        "$red-inverted",
        "$orange-inverted",
        "$yellow-inverted",
        "$green-inverted",
        "$teal-inverted",
        "$blue-inverted",
        "$indigo-inverted",
        "$purple-inverted",
        "$pink-inverted",
        "$shadow-inverted",
      ]
    `);
  });

  it('should return error', () => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      returnThemeColors(undefined);
    } catch (e) {
      expect(e).toMatchInlineSnapshot(`[Error: Invalid theme]`);
    }
  });
});
