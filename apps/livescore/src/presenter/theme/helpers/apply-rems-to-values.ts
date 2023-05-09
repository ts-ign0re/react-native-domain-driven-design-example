import {toString} from 'lodash';
import EStyleSheet, {AnyObject} from 'react-native-extended-stylesheet';
import {UIKitBaseProps, UIKitBaseTextProps, UIKitBaseViewProps} from '../types';

function applyRemsIfNeeded(
  value: number | string | undefined,
): string | number | undefined {
  let type = typeof value;
  // handle percents
  if (type === 'string') {
    if (toString(value)?.endsWith('%')) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      type = 'percents';
    }
  }

  // handle with default flow
  switch (type) {
    case 'string': {
      return toString(value).endsWith('rem')
        ? EStyleSheet.value(value)
        : EStyleSheet.value(`${value}rem`);
    }
    case 'number': {
      return EStyleSheet.value(`${value}rem`);
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    case 'percents': {
      return value;
    }
    default: {
      return undefined;
    }
  }
}

function removeUndefinedValues(obj: any) {
  const result = {};
  Object.keys(obj).forEach(key => {
    if (obj[key] !== undefined) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - we know that the key exists
      result[key] = obj[key];
    }
  });
  return result;
}

export function applyRemsToValues(
  props: UIKitBaseTextProps | UIKitBaseViewProps | UIKitBaseProps,
): {
  style: AnyObject;
} {
  const {
    height,
    flex,
    borderRadius,
    marginRight,
    marginLeft,
    marginTop,
    marginBottom,
    paddingTop,
    paddingBottom,
    paddingVertical,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    marginVertical,
    marginHorizontal,
    margin,
    padding,
    opacity,
    borderColor,
    borderWidth,
    backgroundColor,
    width,
    top,
    left,
    right,
    bottom,
    zIndex,
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
    alignContent,
    alignSelf,
    position,
    overflow,
    color,
    textAlign,
    textDecoration,
    textTransform,
    style,
    ...rest
  } = props;

  return {
    ...rest,
    style: {
      ...removeUndefinedValues(style || {}),
      ...removeUndefinedValues({
        flex,
        flexWrap,
        alignContent,
        position,
        overflow,
        zIndex,
        justifyContent,
        alignItems,
        alignSelf,
        flexDirection,
        textAlign,
        backgroundColor: backgroundColor
          ? EStyleSheet.value(backgroundColor)
          : undefined,
        color: backgroundColor ? EStyleSheet.value(color) : undefined,
        borderColor: borderColor ? EStyleSheet.value(borderColor) : undefined,
        top: applyRemsIfNeeded(top),
        left: applyRemsIfNeeded(left),
        righ: applyRemsIfNeeded(right),
        bottom: applyRemsIfNeeded(bottom),
        borderWidth: applyRemsIfNeeded(borderWidth),
        width: applyRemsIfNeeded(width),
        height: applyRemsIfNeeded(height),
        padding: applyRemsIfNeeded(padding),
        margin: applyRemsIfNeeded(margin),
        paddingVertical: applyRemsIfNeeded(paddingVertical),
        paddingHorizontal: applyRemsIfNeeded(paddingHorizontal),
        paddingBottom: applyRemsIfNeeded(paddingBottom),
        paddingTop: applyRemsIfNeeded(paddingTop),
        paddingLeft: applyRemsIfNeeded(paddingLeft),
        paddingRight: applyRemsIfNeeded(paddingRight),
        marginVertical: applyRemsIfNeeded(marginVertical),
        marginHorizontal: applyRemsIfNeeded(marginHorizontal),
        marginBottom: applyRemsIfNeeded(marginBottom),
        marginLeft: applyRemsIfNeeded(marginLeft),
        marginRight: applyRemsIfNeeded(marginRight),
        marginTop: applyRemsIfNeeded(marginTop),
        borderRadius: applyRemsIfNeeded(borderRadius),
        opacity: opacity,
        textDecoration,
        textTransform,
      }),
    },
  };
}
