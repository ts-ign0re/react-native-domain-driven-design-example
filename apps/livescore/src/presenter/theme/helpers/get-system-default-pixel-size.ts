import {PixelRatio, Platform} from 'react-native';

export function getSystemDefaultPixelSize(os: typeof Platform.OS) {
  switch (os) {
    case 'android': {
      return 1;
    }

    default: {
      if (PixelRatio.get() >= 2) {
        return 0.856;
      }

      return 1;
    }
  }
}
