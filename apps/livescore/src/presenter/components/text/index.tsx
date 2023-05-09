import React, {useMemo} from 'react';
import {Text as RNText} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {applyRemsToValues} from '../../theme/helpers/apply-rems-to-values';
import {getFontStyle} from '../../theme/helpers/get-font-style';
import {UIKitBaseTextProps} from '../../theme/types';

export type TextProps = Partial<UIKitBaseTextProps>;

/**
 * UIKit Text Component
 * @param {TextProps} TextProps
 * @example
 * ```
 * <Text marginTop={4} paddingVertical={16} color="$label01">
 *  Example Text
 * </Text>
 * ```
 */
export const Text: React.FC<TextProps> = ({
  children,
  font,
  color = '$label01',
  style,
  ...otherProps
}) => {
  const fontThemed = useMemo(() => getFontStyle(font), [font]);
  const {style: computedStyles, ...props} = applyRemsToValues(otherProps);
  const colorThemed = useMemo(
    () => ({color: EStyleSheet.value(color)}),
    [color],
  );
  return (
    <RNText {...props} style={[computedStyles, fontThemed, colorThemed, style]}>
      {children}
    </RNText>
  );
};
