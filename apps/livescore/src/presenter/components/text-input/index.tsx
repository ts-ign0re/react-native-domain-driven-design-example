import * as React from 'react';

import {
  Keyboard,
  TextInput as NativeTextInput,
  Text,
  TextInputProps,
  View,
  TouchableOpacity,
} from 'react-native';
import EStyleSheet, {AnyObject} from 'react-native-extended-stylesheet';

import {isFunction} from 'lodash';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Role } from "../role";
import styles from './styles';
import {getFontStyle} from '../../theme/helpers/get-font-style';
import {applyRemsToValues} from '../../theme/helpers/apply-rems-to-values';
import {UIKitBaseProps} from '../../theme/types';

export type InputPropType = TextInputProps &
  UIKitBaseProps & {
    placeholder?: string;
    style?: AnyObject;
    activeLabelStyle?: AnyObject;
    labelStyle?: AnyObject;
    inputStyle?: AnyObject;
    iconName?: 'eye' | 'checkmark' | string;
    onIconPress?: () => void;
    label?: string | null;
    focused?: boolean;
    error?: boolean;
    errorMessage?: string;
    helpText?: string;
    disabled?: boolean;
  };

export function returnIconByName(name: string | undefined) {
  switch (name) {
    case 'eye': {
      // return IconEye;
      return ({ color, style }) => <FontAwesome color={color} size={18} name="eye" style={style} />;
    }
    case 'checkmark': {
      // return CheckmarkIcon;
      return ({ color, style }) => <FontAwesome color={color} size={18} name="check" style={style} />;
    }
    default: {
      // return IconEyeClosed;
      return ({ color, style }) => <FontAwesome color={color} size={18} name="eye-slash" style={style} />;
    }
  }
}

export const TextInput: React.FC<InputPropType> = React.memo(props => {
  const body02FontStyle = getFontStyle('$body02');
  const caption02FontStyle = getFontStyle('$caption02');
  const [focused, setFocused] = React.useState<boolean>(props.focused || false);
  const active = focused || props.value;
  const errorLabelStyles = props.error
    ? {color: EStyleSheet.value('$red')}
    : null;

  const Icon = returnIconByName(props.iconName);

  const ref = React.useRef<NativeTextInput>(null);
  React.useEffect(() => {
    const sub = Keyboard.addListener('keyboardDidHide', () => {
      if (!__DEV__) {
        ref.current?.blur();
      }
    });

    return sub.remove;
  }, []);

  const {style: computedLayoutStyles, ...restProps} = applyRemsToValues(props);
  const caption02Style = getFontStyle('$caption02');

  return (
    <Role name=":input-container">
      <View style={computedLayoutStyles}>
        <View
          style={[
            styles.component,
            active ? styles.componentFocused : null,
            props.style,
            props.error ? {borderColor: EStyleSheet.value('$red')} : null,
          ]}>
          <Role name=":label">
            <Text
              style={[
                styles.label,
                body02FontStyle,
                active ? caption02FontStyle : null,
                active ? styles.labelFocused : null,
                errorLabelStyles,
                props.labelStyle,
                active ? props.activeLabelStyle : null,
              ]}>
              {props.label}
            </Text>
          </Role>
          <Role name=":input-component">
            <NativeTextInput
              {...restProps}
              ref={ref}
              onFocus={e => {
                setFocused(true);
                if (isFunction(props.onFocus)) {
                  props.onFocus(e);
                }
              }}
              onBlur={e => {
                setFocused(false);
                if (isFunction(props.onBlur)) {
                  props.onBlur(e);
                }
              }}
              style={[
                styles.input,
                props.inputStyle,
                body02FontStyle,
                active ? styles.inputFocused : null,
                {maxWidth: props.iconName ? '88%' : null},
              ]}
            />
          </Role>
          {props.disabled ? (
            <Role name=":disabled-cover">
              <View style={[EStyleSheet.absoluteFill, styles.cover]} />
            </Role>
          ) : null}
          {props.iconName ? (
            <Role name=":button">
              <TouchableOpacity
                onPress={props.onIconPress}
                disabled={!props.onIconPress}
                style={styles.rightIconWrapper}>
                <Role name=":icon">
                  <Icon
                    color={EStyleSheet.value('$label02')}
                    style={styles.rightIcon}
                  />
                </Role>
              </TouchableOpacity>
            </Role>
          ) : null}
        </View>
        {props.errorMessage ? (
          <Text style={[styles.errorMessage, caption02Style]}>
            {props.errorMessage}
          </Text>
        ) : props.helpText ? (
          <Text style={[styles.helpText, caption02Style]}>
            {props.helpText}
          </Text>
        ) : null}
      </View>
    </Role>
  );
});
