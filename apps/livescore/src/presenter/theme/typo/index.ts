import {Platform} from 'react-native';
import typo_android from './android_typography.json';
import typo_ios from './ios_typography.json';

export const fonts = Platform.select({
  ios: typo_ios,
  android: typo_android,
}) as typeof typo_ios | typeof typo_android;

export const typography: typeof typo_ios | typeof typo_android = {
  $caption01: {
    fontFamily: fonts.$caption01.fontFamily,
    fontSize: fonts.$caption01.fontSize,
    lineHeight: fonts.$caption01.lineHeight,
    fontWeight: fonts.$caption01.fontWeight,
  },
  $caption02: {
    fontFamily: fonts.$caption02.fontFamily,
    fontSize: fonts.$caption02.fontSize,
    lineHeight: fonts.$caption02.lineHeight,
    fontWeight: fonts.$caption02.fontWeight,
  },

  $button01: {
    fontFamily: fonts.$button01.fontFamily,
    fontSize: fonts.$button01.fontSize,
    lineHeight: fonts.$button01.lineHeight,
    fontWeight: fonts.$button01.fontWeight,
    textTransform: fonts.$button01.textTransform,
  },
  $button02: {
    fontFamily: fonts.$button02.fontFamily,
    fontSize: fonts.$button02.fontSize,
    lineHeight: fonts.$button02.lineHeight,
    fontWeight: fonts.$button02.fontWeight,
    textTransform: fonts.$button02.textTransform,
  },
  $button03: {
    fontFamily: fonts.$button03.fontFamily,
    fontSize: fonts.$button03.fontSize,
    lineHeight: fonts.$button03.lineHeight,
    fontWeight: fonts.$button03.fontWeight,
    textTransform: fonts.$button03.textTransform,
  },

  $body01: {
    fontFamily: fonts.$body01.fontFamily,
    fontSize: fonts.$body01.fontSize,
    lineHeight: fonts.$body01.lineHeight,
    fontWeight: fonts.$body01.fontWeight,
  },
  $body02: {
    fontFamily: fonts.$body02.fontFamily,
    fontSize: fonts.$body02.fontSize,
    lineHeight: fonts.$body02.lineHeight,
    fontWeight: fonts.$body02.fontWeight,
  },

  $heading01: {
    fontFamily: fonts.$heading01.fontFamily,
    fontSize: fonts.$heading01.fontSize,
    lineHeight: fonts.$heading01.lineHeight,
    fontWeight: fonts.$heading01.fontWeight,
    textTransform: fonts.$heading01.textTransform,
  },
  $heading02: {
    fontFamily: fonts.$heading02.fontFamily,
    fontSize: fonts.$heading02.fontSize,
    lineHeight: fonts.$heading02.lineHeight,
    fontWeight: fonts.$heading02.fontWeight,
  },
  $heading03: {
    fontFamily: fonts.$heading03.fontFamily,
    fontSize: fonts.$heading03.fontSize,
    lineHeight: fonts.$heading03.lineHeight,
    fontWeight: fonts.$heading03.fontWeight,
  },
  $display01: {
    fontFamily: fonts.$display01.fontFamily,
    fontSize: fonts.$display01.fontSize,
    lineHeight: fonts.$display01.lineHeight,
    fontWeight: fonts.$display01.fontWeight,
  },
  $display02: {
    fontFamily: fonts.$display02.fontFamily,
    fontSize: fonts.$display02.fontSize,
    lineHeight: fonts.$display02.lineHeight,
    fontWeight: fonts.$display02.fontWeight,
  },
  $display03: {
    fontFamily: fonts.$display03.fontFamily,
    fontSize: fonts.$display03.fontSize,
    lineHeight: fonts.$display03.lineHeight,
    fontWeight: fonts.$display03.fontWeight,
  },
  $display04: {
    fontFamily: fonts.$display04.fontFamily,
    fontSize: fonts.$display04.fontSize,
    lineHeight: fonts.$display04.lineHeight,
    fontWeight: fonts.$display04.fontWeight,
  },
};
