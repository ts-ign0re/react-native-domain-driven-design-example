import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

type DesignSizeType = {
  width: number;
};

export const createPerfectPixel = (designSize: DesignSizeType) => {
  if (!designSize) {
    throw new Error('Design size is required');
  }
  return (size: number) => (width / designSize.width) * size;
};
