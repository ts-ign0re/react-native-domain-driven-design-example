import {AnyObject} from 'react-native-extended-stylesheet';
import {cloneElement, default as React} from 'react';

const Context = React.createContext('');
const {Provider, Consumer} = Context;

type ConfigType = {
  display: boolean;
  attr: string;
  testAttr: string;
};

let globalConfig: ConfigType = {
  display: true,
  attr: 'testID',
  testAttr: 'accessibilityLabel',
};

export type RoleAttrsType = {
  name: string;
  children: React.ReactElement;
  ownProps: AnyObject;
};

function render(
  name: string,
  children: React.ReactElement,
  ownProps: AnyObject,
): React.ReactElement {
  const el = cloneElement(
    children,
    Object.assign({}, ownProps, children.props, {
      [globalConfig.attr]: name,
      [globalConfig.testAttr]: name,
      style: [ownProps.style, children.props.style],
    }),
  );

  return <Provider value={name}>{el}</Provider>;
}

function renderRelative(
  name: string,
  children: React.ReactElement,
  props: AnyObject,
) {
  return (
    <Consumer>
      {namespace => render(`${namespace}${name}`, children, props)}
    </Consumer>
  );
}

function renderWithoutRole(children: React.ReactElement, ownProps: AnyObject) {
  return cloneElement(
    children,
    Object.assign({}, ownProps, children.props, {
      style: [ownProps.style, children.props.style],
    }),
  );
}

export const useRole = (name: string, relative = name.indexOf(':') === 0) => {
  const namespace = React.useContext(Context);
  const role = relative ? `${namespace}${name}` : name;
  return {
    [globalConfig.attr]: role,
  };
};

type RoleProps = {
  name: string;
  children: React.ReactElement;
  style?: AnyObject;
};

export function setConfig(config: ConfigType) {
  globalConfig = {
    ...globalConfig,
    ...config,
  };
}

export const Role: React.FC<RoleProps> = (defaultProps) => {
  const {name = '', children, ...props} = defaultProps;
  if (!globalConfig.display) {
    return renderWithoutRole(children, props);
  }

  return (name.indexOf(':') === 0 ? renderRelative : render)(
    name,
    children,
    props,
  );
}

// eslint-disable-next-line
// @ts-ignore
Role.setConfig = setConfig;
