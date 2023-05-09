import {getSystemDefaultPixelSize} from './get-system-default-pixel-size';

describe('getSystemDefaultPixelSize', () => {
  it('should return 1 for android', () => {
    expect(getSystemDefaultPixelSize('android')).toBe(1);
  });

  it('should return 0.856 for ios', () => {
    expect(getSystemDefaultPixelSize('ios')).toBe(0.856);
  });
});
