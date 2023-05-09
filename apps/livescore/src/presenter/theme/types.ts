import {
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
  TextProps,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {AnyObject} from 'react-native-extended-stylesheet';
import {DARK_THEME_COLORS as THEME_COLORS} from './configuration';

export type Theme = 'light' | 'dark';

export type ThemeColors = {
  $ui01: string;
  $ui02: string;
  $ui03: string;
  $label01: string;
  $label02: string;
  $label03: string;
  $brand01: string;
  $brand02: string;
  $brand03: string;
  $red: string;
  $orange: string;
  $yellow: string;
  $green: string;
  $teal: string;
  $blue: string;
  $indigo: string;
  $purple: string;
  $pink: string;
  $shadow: string;
};

export type ThemeColorsInverted = {
  '$ui01-inverted': string;
  '$ui02-inverted': string;
  '$ui03-inverted': string;
  '$label01-inverted': string;
  '$label02-inverted': string;
  '$label03-inverted': string;
  '$brand01-inverted': string;
  '$brand02-inverted': string;
  '$brand03-inverted': string;
  '$red-inverted': string;
  '$orange-inverted': string;
  '$yellow-inverted': string;
  '$green-inverted': string;
  '$teal-inverted': string;
  '$blue-inverted': string;
  '$indigo-inverted': string;
  '$purple-inverted': string;
  '$pink-inverted': string;
  '$shadow-inverted': string;
};

export type Fonts =
  | '$caption01'
  | '$caption02'
  | '$button01'
  | '$button02'
  | '$button03'
  | '$body01'
  | '$body02'
  | '$heading01'
  | '$heading02'
  | '$heading03'
  | '$display01'
  | '$display02'
  | '$display03'
  | '$display04';

export type Typography = Fonts;

export type TextKeys =
  | '$label01'
  | '$label02'
  | '$label03'
  | '$label01-inverted'
  | '$label02-inverted'
  | '$label03-inverted';

type UIKeys =
  | '$ui01'
  | '$ui02'
  | '$ui03'
  | '$red'
  | '$orange'
  | '$yellow'
  | '$green'
  | '$teal'
  | '$blue'
  | '$indigo'
  | '$purple'
  | '$pink'
  | '$shadow'
  | '$ui01-inverted'
  | '$ui02-inverted'
  | '$ui03-inverted'
  | '$red-inverted'
  | '$orange-inverted'
  | '$yellow-inverted'
  | '$green-inverted'
  | '$teal-inverted'
  | '$blue-inverted'
  | '$indigo-inverted'
  | '$purple-inverted'
  | '$pink-inverted'
  | '$shadow-inverted';

type BrandKeys =
  | '$brand01'
  | '$brand02'
  | '$brand03'
  | '$brand01-inverted'
  | '$brand02-inverted'
  | '$brand03-inverted';

export type UIColors = Pick<typeof THEME_COLORS, UIKeys>;
export type TextColors = Pick<typeof THEME_COLORS, TextKeys>;
export type BrandColors = Pick<typeof THEME_COLORS, BrandKeys>;

export type Colors = typeof THEME_COLORS;

export type UIKitBaseProps = {
  height?: number | string;
  flex?: number;
  borderRadius?: number | string;
  marginRight?: number | string;
  marginLeft?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingVertical?: number | string;
  paddingHorizontal?: number | string;
  marginVertical?: number | string;
  marginHorizontal?: number | string;
  margin?: number | string;
  padding?: number | string;
  opacity?: number;
  borderColor?: UIKeys | 'transparent';
  borderWidth?: number | string;
  backgroundColor?: UIKeys | BrandKeys | 'transparent';
  width?: number | string;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  zIndex?: number;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around';
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  position?: 'absolute' | 'relative';
  overflow?: 'visible' | 'hidden' | 'scroll';
  color?: TextKeys | BrandKeys | 'transparent';
  style?: AnyObject;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  textDecoration?: 'none' | 'underline' | 'line-through';
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
};

export type UIKitBaseViewProps = UIKitBaseProps;

export type UIKitBaseTextProps = TextProps &
  Omit<UIKitBaseProps, 'textAlign'> & {
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    color?: TextKeys | BrandKeys;
    font?: Typography;
    textDecoration?: 'none' | 'underline' | 'line-through';
  };

export type TextInputProps = RNTextInputProps & UIKitBaseProps;

export type ButtonBaseProps = UIKitBaseProps &
  TouchableOpacityProps & {
    /**
     * Main colors
     */
    backgroundColor?: keyof BrandColors | keyof UIColors;
    buttonStyle?: ViewStyle;
    /**
     * Label
     */
    label: string;
    labelColor?: keyof TextColors;
    labelStyle?: TextStyle;

    disabled?: boolean;
    loading?: boolean;
    visible?: boolean;
  };
export type ButtonProps = ButtonBaseProps & {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  type: 'primary' | 'secondary' | 'ghost';
};
