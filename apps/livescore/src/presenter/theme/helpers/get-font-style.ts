import EStyleSheet from 'react-native-extended-stylesheet';
import {typography} from '../../theme';

export function getFontStyle(
  font?: keyof typeof typography,
): (typeof typography)[keyof typeof typography] | null {
  if (font && font in typography) {
    return {
      ...typography[font],
      fontSize: EStyleSheet.value(typography[font].fontSize) as unknown as string,
      lineHeight: EStyleSheet.value(typography[font].lineHeight) as unknown as string,
    };
  } else {
    return null;
  }
}
