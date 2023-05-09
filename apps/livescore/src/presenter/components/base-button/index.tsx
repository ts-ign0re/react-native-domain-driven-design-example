import {isFunction} from 'lodash';
import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {ButtonBaseProps} from '../types';

export const BaseButtonComponent: React.FC<ButtonBaseProps> = React.memo(
  ({visible = true, ...props}) => {
    const handler = useCallback(() => {
      if (props.disabled || props.loading) {
        return;
      }

      if (isFunction(props.onPress)) {
        return props.onPress();
      }
    }, [props]);

    if (!visible) {
      return null;
    }

    return (
      <TouchableOpacity {...props} onPress={handler}>
        {props.children}
      </TouchableOpacity>
    );
  },
);
