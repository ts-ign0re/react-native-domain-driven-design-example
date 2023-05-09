import {createPerfectPixel} from './pixel-perfect';

describe('createPerfectPixel', () => {
  it('should return a function', () => {
    const pixelPerfect = createPerfectPixel({width: 375});
    expect(typeof pixelPerfect).toBe('function');
  });

  it('should return a pixel perfect size', () => {
    const pixelPerfect = createPerfectPixel({width: 375});
    expect(pixelPerfect(10)).toBe(20);
  });

  it('should return exepcted pixel perfect size', () => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      createPerfectPixel(null);
    } catch (e) {
      expect(e).toMatchInlineSnapshot(`[Error: Design size is required]`);
    }
  });
});
