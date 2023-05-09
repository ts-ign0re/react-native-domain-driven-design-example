import {View, ViewStyle} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import React from 'react';
import {UIKitBaseViewProps} from '../../theme/types';
import {applyRemsToValues} from '../../theme/helpers/apply-rems-to-values';

type CardProps = UIKitBaseViewProps & {
  children?: React.ReactNode;
  style?: ViewStyle;
};

const styles = EStyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
    padding: 0,
    borderRadius: 0,
  },
});

/**
 *
 * @param {CardProps} props
 * @returns React.FC<CardProps>
 */
export const Card: React.FC<CardProps> = React.memo(
  ({children, style, ...otherProps}) => {
    const {style: computedStyles, ...props} = applyRemsToValues(otherProps);
    return (
      <View {...props} style={[styles.wrapper, computedStyles, style]}>
        {children}
      </View>
    );
  },
);
