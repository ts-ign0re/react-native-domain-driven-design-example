import * as React from 'react';
import { Role } from '../role';
import { TextInput, InputPropType } from '../text-input';

export const TextInputSecure: React.FC<InputPropType> = props => {
  const [secure, toggleSecureMode] = React.useState(true);
  return (
    <Role name=":input">
      <TextInput
        secureTextEntry={secure}
        iconName={secure ? 'eye-slash' : 'eye'}
        onIconPress={() => toggleSecureMode(!secure)}
        {...props}
      />
    </Role>
  );
};
