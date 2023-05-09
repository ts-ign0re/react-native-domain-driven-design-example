import * as React from 'react';
import EStyleSheet, { AnyObject } from 'react-native-extended-stylesheet';
import { View } from 'react-native';
import {Role} from '../role';
import SpinnerComponent from 'react-native-spinkit';
import { DARK_THEME_COLORS } from '../../theme';
import { applyRemsToValues } from '../../theme/helpers/apply-rems-to-values';
import { TextColors, UIColors, UIKitBaseViewProps } from '../../theme/types';

export enum SpinnerType {
  'CircleFlip' = 'CircleFlip',
  'Bounce' = 'Bounce',
  'Wave' = 'Wave',
  'WanderingCubes' = 'WanderingCubes',
  'Pulse' = 'Pulse',
  'ChasingDots' = 'ChasingDots',
  'ThreeBounce' = 'ThreeBounce',
  'Circle' = 'Circle',
  '9CubeGrid' = '9CubeGrid',
  'WordPress' = 'WordPress',
  'FadingCircle' = 'FadingCircle',
  'FadingCircleAlt' = 'FadingCircleAlt',
  'Arc' = 'Arc',
  'ArcAlt' = 'ArcAlt',
  'Plane' = 'Plane',
}

type LoadingIndicatorProps = Omit<UIKitBaseViewProps, 'color'> & {
  size?: number;
  type?: typeof SpinnerType[keyof typeof SpinnerType];
  style?: AnyObject;
  color?: keyof UIColors | keyof TextColors;
};

export function LoadingIndicator({ color, ...props }: LoadingIndicatorProps) {
  const { style } = applyRemsToValues(props);
  return (
    <Role name=":loader">
      <View
        style={[
          {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999,
          },
          props.style,
          style,
        ]}>
        <SpinnerComponent
          type={props.type || SpinnerType.ThreeBounce}
          size={props.size || 50}
          color={EStyleSheet.value(color) || DARK_THEME_COLORS.$brand02}
        />
      </View>
    </Role>
  );
}
