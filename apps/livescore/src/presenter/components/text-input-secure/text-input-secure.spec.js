import 'react-native';
import React from 'react';
import { TextInputSecure as Component } from './index';

import { render } from '@testing-library/react-native';

describe('TextInputSecure', () => {
  const MOCKS = 'tests string';
  it('renders correctly', () => {
    render(<Component value={MOCKS} />);
  });

  it('renders label correctly', async () => {
    const mounted = render(<Component value={MOCKS} label="Test label" />);
    expect(mounted.getByText('Test label')).toBeTruthy();
  });

  it('renders disable cover correctly', () => {
    const mounted = render(<Component disabled={true} value={MOCKS} label="Test label" />);
    expect(mounted.getByTestId(':input:input-container:disabled-cover')).toBeTruthy();
  });
});
