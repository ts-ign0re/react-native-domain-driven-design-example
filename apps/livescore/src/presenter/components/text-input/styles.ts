import { Platform } from 'react-native';
import EStyleSheet, { AnyObject } from 'react-native-extended-stylesheet';

const styles: AnyObject = EStyleSheet.create({
  component: {
    position: 'relative',
    height: '60rem',
    backgroundColor: '$ui02',
    borderRadius: '6rem',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderWidth: '1rem',
    borderColor: '$ui02',
    overflow: 'hidden',
  },
  componentFocused: {
    borderColor: '$ui03',
  },
  input: {
    flex: 1,
    height: '60rem',
    lineHeight: '61rem',
    paddingHorizontal: '16rem',
    paddingVertical: 0,
    color: '$label02',
    top: Platform.OS === 'android' ? '8rem' : '4rem',
  },
  inputFocused: {
    color: '$label01',
  },
  label: {
    position: 'absolute',
    top: '16rem',
    left: '16rem',
    color: '$label02',
  },
  labelFocused: {
    color: '$label01',
    top: '8rem',
  },
  rightIcon: {},
  rightIconWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    paddingLeft: '8rem',
    width: '40rem',
    height: '60rem',
    right: 0,
  },
  cover: {
    backgroundColor: '$ui01',
    opacity: 0.5,
  },
  errorMessage: {
    marginTop: '2rem',
    left: '16rem',
    color: '$red',
  },
  helpText: {
    marginTop: '2rem',
    left: '16rem',
    color: '$label02',
  },
});

export default styles;
