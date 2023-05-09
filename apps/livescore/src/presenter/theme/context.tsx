import {isFunction, noop} from 'lodash';
import React, {useState, useCallback, useEffect} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {createPerfectPixel} from './helpers/pixel-perfect';
import {Theme} from './types';
import {typography} from './typo';
import {returnThemeColors} from './helpers/return-theme-colors';
import {defaultTheme, DEFAULT_MOBILE_SCREEN_SETTINGS} from './configuration';

const defaultContextValue = {
  theme: 'dark',
  colors: returnThemeColors('dark'),
  typography,
  toggleTheme: noop,
  isLight: false,
};

export const ThemeContext = React.createContext(defaultContextValue);
ThemeContext.displayName = 'ThemeContext';

/**
 * UIKit React Native StyleSheet
 */
export const UIKitStyleSheet = EStyleSheet;

/**
 * React Hook to get the current theme and colors
 * @returns {typeof React.useContext(ThemeContext)}
 */
export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  return context;
};

/**
 * React Hook to set the current theme
 * @returns Wrapper component that provides the theme context
 */
export const ThemeProvider = ({
  children,
  initialTheme = 'dark',
  onStart = noop,
  onFinish = noop,
  loader = null,
}: {
  children: React.ReactNode;
  initialTheme?: Theme;
  onStart?: () => unknown;
  onFinish?: () => unknown;
  loader?: React.ReactNode;
}) => {
  const [ready, setReady] = useState(false);
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = useCallback((nextTheme: Theme) => {
    setTheme(nextTheme === 'light' ? 'dark' : 'light');
  }, []);

  /**
   * Update the theme colors when the theme changes
   */
  useEffect(() => {
    if (isFunction(onStart)) {
      onStart();
    }

    EStyleSheet.build({
      ...defaultTheme,
      $rem: createPerfectPixel(DEFAULT_MOBILE_SCREEN_SETTINGS)(1),
      $theme: theme,
      ...returnThemeColors(theme),
    });

    if (isFunction(onFinish)) {
      onFinish();
      setReady(true);
    }
  }, [theme, onStart, onFinish]);

  if (!ready) {
    return <>{loader}</>;
  }

  return (
    <ThemeContext.Provider
      value={{
        ...defaultContextValue,
        toggleTheme,
        theme,
        colors: returnThemeColors(theme),
        isLight: theme === 'light',
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
