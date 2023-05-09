import React from 'react';
import { LoadingIndicator } from './index';
import { render } from '@testing-library/react-native';

describe('loder', () => {
  it('renders <LoadingIndicator /> correctly', () => {
    const { container, getByTestId } = render(<LoadingIndicator />);
    expect(container).toBeTruthy();
    expect(getByTestId(':loader')).toBeTruthy();
  });
});
