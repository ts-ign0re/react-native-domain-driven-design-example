import {toLower} from 'lodash';
import React from 'react';
import {View, ViewStyle} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {applyRemsToValues} from '../../theme/helpers/apply-rems-to-values';
import {getFontStyle} from '../../theme/helpers';
import {Text} from '../text';
import {BaseButtonComponent} from '../base-button';
import {ButtonBaseProps} from '../../theme/types';
import {LoadingIndicator} from '../loading-indicator';
import {Role} from '../role';

export type ButtonProps = ButtonBaseProps & {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  type: 'primary' | 'secondary' | 'ghost';
};

function returnStyleBasedOnSize(size: ButtonProps['size']): {
  buttonStyle: ViewStyle;
  labelStyle: any;
} {
  switch (size) {
    case 'small':
      return {
        buttonStyle: {
          minHeight: EStyleSheet.value('30rem'),
          paddingHorizontal: EStyleSheet.value('12rem'),
          borderRadius: EStyleSheet.value('8rem'),
        },
        labelStyle: {
          textAlign: 'center',
          ...getFontStyle('$button01'),
        },
      };
    case 'medium':
      return {
        buttonStyle: {
          minHeight: EStyleSheet.value('40rem'),
          paddingVertical: EStyleSheet.value('8rem'),
          paddingHorizontal: EStyleSheet.value('16rem'),
          borderRadius: EStyleSheet.value('8rem'),
        },
        labelStyle: {
          textAlign: 'center',
          ...getFontStyle('$button02'),
        },
      };
    default: {
      // large is the default
      return {
        buttonStyle: {
          minHeight: EStyleSheet.value('58rem'),
          paddingVertical: EStyleSheet.value('8rem'),
          paddingHorizontal: EStyleSheet.value('24rem'),
          borderRadius: EStyleSheet.value('8rem'),
        },
        labelStyle: {
          textAlign: 'center',
          ...getFontStyle('$button03'),
        },
      };
    }
  }
}

function returnStyleBasedOnTypeForDisabled(
  type: ButtonProps['type'],
  defaultColor = '$label02',
) {
  switch (type) {
    case 'secondary':
      return {
        buttonStyle: {
          backgroundColor: 'transparent',
          borderColor: EStyleSheet.value('$ui01'),
          borderWidth: 0,
        },
        labelStyle: {
          color: EStyleSheet.value(defaultColor ?? '$label02'),
        },
      };
    case 'ghost':
      return {
        buttonStyle: {
          backgroundColor: 'transparent',
          paddingVertical: 0,
          paddingHorizontal: 0,
        },
        labelStyle: {
          color: EStyleSheet.value(defaultColor ?? '$label02'),
        },
      };
    default: {
      // primary is the default
      return {
        buttonStyle: {
          backgroundColor: EStyleSheet.value('$label03'),
        },
        labelStyle: {
          color: EStyleSheet.value(defaultColor ?? '$label02'),
        },
      };
    }
  }
}

function returnStyleBasedOnType(type: ButtonProps['type']) {
  switch (type) {
    case 'secondary':
      return {
        buttonStyle: {
          backgroundColor: 'transparent',
          borderColor: EStyleSheet.value('$label03'),
          borderWidth: EStyleSheet.value('1rem'),
        },
        labelStyle: {
          color: EStyleSheet.value('$label01'),
        },
      };
    case 'ghost':
      return {
        buttonStyle: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderWidth: EStyleSheet.value('1rem'),
          paddingVertical: 0,
          paddingHorizontal: 0,
        },
        labelStyle: {
          color: EStyleSheet.value('$label01'),
        },
      };
    default: {
      // primary is the default
      return {
        buttonStyle: {
          backgroundColor: EStyleSheet.value('$brand01'),
          borderColor: EStyleSheet.value('$brand01'),
          borderWidth: EStyleSheet.value('1rem'),
        },
        labelStyle: {
          color:
            EStyleSheet.value('$theme') === 'dark'
              ? EStyleSheet.value('$label01-inverted')
              : EStyleSheet.value('$label01'),
        },
      };
    }
  }
}

const styles = EStyleSheet.create({
  wrapperStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconDefaultLeft: {
    marginRight: EStyleSheet.value('6rem'),
  },
  iconSmallLeft: {
    marginRight: EStyleSheet.value('2rem'),
  },
  iconDefaultRight: {
    marginLeft: EStyleSheet.value('6rem'),
  },
  iconSmallRight: {
    marginLeft: EStyleSheet.value('2rem'),
  },
});

/**
 * Button component
 * @example
 * <Button
 *   label="Button"
 *   onPress={onPress}
 *   type="primary"
 *   size="large"
 * />
 */
export const Button: React.FC<ButtonProps> = React.memo(
  ({size = 'large', type = 'primary', color, ...props}) => {
    const {style: layoutStyles} = applyRemsToValues(props);

    // apply type
    const stylesByType = props.disabled
      ? returnStyleBasedOnTypeForDisabled(type, color)
      : returnStyleBasedOnType(type);
    const stylesBySize = returnStyleBasedOnSize(size);

    // memoize the style object
    const computedStyles = React.useMemo(() => {
      return [stylesBySize.buttonStyle, stylesByType.buttonStyle, props.style];
    }, [props.style, stylesBySize, stylesByType]);
    return (
      <Role name={props.testID || ':button'}>
        <BaseButtonComponent
          key={`button-${size}-${type}-${props.testID}-${toLower(props.label)}`}
          {...props}
          style={[layoutStyles, computedStyles]}>
          <View style={styles.wrapperStyle}>
            {props.loading ? (
              <LoadingIndicator size={24} color="$label01" />
            ) : (
              <>
                {props.iconLeft ? props.iconLeft : null}
                <Role name=":label">
                  <Text
                    color="$label01-inverted"
                    style={[
                      props.labelStyle,
                      stylesBySize.labelStyle,
                      stylesByType.labelStyle,
                    ]}>
                    {props.label}
                  </Text>
                </Role>
                {props.iconRight ? props.iconRight : null}
              </>
            )}
          </View>
        </BaseButtonComponent>
      </Role>
    );
  },
);
