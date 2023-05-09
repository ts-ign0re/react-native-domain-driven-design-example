import React from 'react';
import renderer from 'react-test-renderer';

import { Role } from '../index';
import { Text, View } from 'react-native';

describe('enabled roles', () => {
  beforeAll(() => {
    Role.setConfig({ display: true });
  });

  test('Roles should be rendered', () => {
    const component = renderer.create(
      <Role name="parent">
        <View>
          <Role name=":child">
            <span>
              <Role name="absolute">
                <Text>Some inner text</Text>
              </Role>
            </span>
          </Role>
        </View>
      </Role>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should pass style to the child', () => {
    const component = renderer.create(
      <Role name="parent" style={{ flex: 1 }}>
        <View />
      </Role>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should merge classes', () => {
    const component = renderer.create(
      <Role name="parent" style={{ flex: 2 }}>
        <View style={{ flex: 1 }} />
      </Role>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should pass unknown props to the child', () => {
    const component = renderer.create(
      <Role name="parent" unknownProp="value">
        <View />
      </Role>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('disabled roles', () => {
  beforeAll(() => {
    Role.setConfig({ display: false });
  });

  test("Roles shouldn't be rendered", () => {
    const component = renderer.create(
      <Role name="parent">
        <View>
          <Role name=":child">
            <span>
              <Role name="absolute">
                <Text>Some text</Text>
              </Role>
            </span>
          </Role>
        </View>
      </Role>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should pass style to the child', () => {
    const component = renderer.create(
      <Role name="parent" style={{ flex: 2 }}>
        <View />
      </Role>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should merge classes', () => {
    const component = renderer.create(
      <Role name="parent" style={{ flex: 2 }}>
        <View style={{ flex: 1 }} />
      </Role>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should pass unknown props to the child', () => {
    const component = renderer.create(
      <Role name="parent" unknownProp="value">
        <View />
      </Role>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
