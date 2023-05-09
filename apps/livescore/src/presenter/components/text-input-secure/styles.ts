import EStyleSheet, { AnyObject } from 'react-native-extended-stylesheet';

const styles: AnyObject = EStyleSheet.create({
  wrapper: {
    position: 'relative',
    zIndex: 1,
    elevation: 1,
  },
  divider: {
    height: '1rem',
    alignSelf: 'stretch',
    marginHorizontal: '4rem',
    backgroundColor: '$label02',
    top: '-4rem',
    marginBottom: '16rem',
  },
  dropdown: {
    zIndex: 1,
    elevation: 1,
    position: 'absolute',
    backgroundColor: '$ui02',
    padding: '16rem',

    borderBottomLeftRadius: '12rem',
    borderBottomRightRadius: '12rem',
    borderWidth: '1rem',
    borderColor: '$label01',
    borderTopWidth: 0,

    width: '100%',
    top: '50rem',
  },
  errorText: {
    lineHeight: '20rem',
    color: '$label02',
  },
});

export default styles;
