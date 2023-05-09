import React from 'react';
import { Button } from './index';
import { render } from '@testing-library/react-native';
import { IconEye } from "../svg-icons";
import { Role } from "../role";

describe('button', () => {
  it('renders correctly', () => {
    const onPress = jest.fn();
    const node = render(
      <Button
          size="large"
          type="primary"
          label="Test label"
          loading={false}
          onPress={onPress}
        />
    );
    expect(node.getByTestId(':button')).toBeTruthy();
    expect(node.getByTestId(':button:label')).toBeTruthy();
    expect(node.getByText('Test label')).toBeTruthy();
  });
  it('renders correctly with loader', () => {
    const onPress = jest.fn();
    const node = render(
      <Button
          size="large"
          type="primary"
          label="Test"
          loading={true}
          onPress={onPress}
        />
    );
    expect(node.getByTestId(':button')).toBeTruthy();
    expect(node.getByTestId(':button:loader')).toBeTruthy();
  });

  it('renders correctly with left icon', () => {
    const onPress = jest.fn();
    const node = render(
      <Button
          size="large"
          type="primary"
          label="Test"
          loading={false}
          onPress={onPress}
          iconLeft={<Role name=":icon-left"><IconEye /></Role>}
        />
    );
    expect(node.getByTestId(':button')).toBeTruthy();
    expect(node.getByTestId(':button:icon-left')).toBeTruthy();
  });

  it('renders correctly with right icon', () => {
    const onPress = jest.fn();
    const node = render(
      <Button
          size="large"
          type="primary"
          label="Test"
          loading={false}
          onPress={onPress}
          iconRight={<Role name=":icon-right"><IconEye /></Role>}
        />
    );
    expect(node.getByTestId(':button')).toBeTruthy();
    expect(node.getByTestId(':button:icon-right')).toBeTruthy();
  });
});