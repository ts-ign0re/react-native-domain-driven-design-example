import React from 'react';
import { Card } from './index';
import { render } from '@testing-library/react-native';

describe('Card', () => {
  it('should renders correctly', () => {
    const wrapper = render(<Card />);
    expect(wrapper.container).toBeTruthy();
  });

  it('should render testID', () => {
    const wrapper = render(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <Card testID="test-box" />
    );
    expect(wrapper.container.props.name).toEqual('test-box');
    expect(wrapper.getByLabelText('test-box')).toBeTruthy();
  });
});
