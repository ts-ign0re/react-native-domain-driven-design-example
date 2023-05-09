import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Text} from '../../components';

describe('Text', () => {
  it('renders correctly', () => {
    const tree = render(<Text>Test</Text>);
    expect(tree).toBeDefined();
  });

  it('renders correctly with color', () => {
    const tree = render(<Text color="$label02">Test</Text>);
    expect(tree.getByText('Test').props.style).toContainEqual({
      color: '#A8B6CA',
    });
  });

  it('renders correctly with font', () => {
    const tree = render(
      <Text font="$caption01" color="$label01">
        Test
      </Text>,
    );
    expect(tree.getByText('Test').props.style[1]).toEqual({
      fontFamily: 'System',
      fontSize: 10,
      fontWeight: '400',
      lineHeight: 12,
    });
    expect(tree.getByText('Test').props.style).toContainEqual({
      color: '#DEDEDE',
    });
  });

  it('handles onPress events', () => {
    const fn = jest.fn();
    const {getByText} = render(<Text onPress={fn}>Test</Text>);
    fireEvent.press(getByText('Test'));
    expect(fn).toHaveBeenCalled();
  });
});
