import {DARK_THEME_COLORS, LIGHT_THEME_COLORS} from '../../theme/configuration';
import {Theme} from '../../theme/types';

/**
 *
 * @param theme - 'light' | 'dark'
 * @returns Theme colors
 */
export function returnThemeColors(theme: Theme) {
  switch (theme) {
    case 'light':
      return LIGHT_THEME_COLORS;
    case 'dark':
      return DARK_THEME_COLORS;
    default: {
      throw new Error('Invalid theme');
    }
  }
}
