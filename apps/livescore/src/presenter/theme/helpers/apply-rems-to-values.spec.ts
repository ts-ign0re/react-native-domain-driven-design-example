import {applyRemsToValues} from './apply-rems-to-values';

describe('applyRemsToValues', () => {
  it('should apply rems to values', () => {
    const props = {
      width: '1rem',
      height: '2rem',
      backgroundColor: '$ui03',
      borderColor: '$ui03',
      borderWidth: '5rem',
      marginBottom: '6rem',
      marginLeft: '7rem',
      marginRight: '8rem',
      marginTop: '9rem',
      paddingBottom: '10rem',
      paddingTop: '11rem',
      paddingLeft: 12,
      paddingRight: 24,
      paddingVertical: '12rem',
      paddingHorizontal: '13rem',
      marginVertical: '14rem',
      marginHorizontal: '15rem',
      padding: '16rem',
      margin: '17rem',
      borderRadius: '18rem',
      opacity: 1,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = applyRemsToValues(props);

    expect(result.style).toEqual({
      width: 1,
      height: 2,
      backgroundColor: '#3E5866',
      borderColor: '#3E5866',
      borderWidth: 5,
      marginBottom: 6,
      marginLeft: 7,
      marginRight: 8,
      marginTop: 9,
      paddingBottom: 10,
      paddingTop: 11,
      paddingVertical: 12,
      paddingHorizontal: 13,
      marginVertical: 14,
      marginHorizontal: 15,
      padding: 16,
      margin: 17,
      borderRadius: 18,
      opacity: 1,
      paddingLeft: 12,
      paddingRight: 24,
    });

    expect({}).toEqual({});
    expect(applyRemsToValues({flex: 1}).style).toEqual({flex: 1});
    expect(
      applyRemsToValues({
        flex: 1,
        justifyContent: 'center',
        alignItems: 'baseline',
      }).style,
    ).toEqual({
      flex: 1,
      alignItems: 'baseline',
      justifyContent: 'center',
    });
    expect(
      applyRemsToValues({
        flex: 1,
        justifyContent: 'center',
        alignItems: 'baseline',
        style: {flex: 2},
      }).style,
    ).toEqual({
      flex: 1,
      alignItems: 'baseline',
      justifyContent: 'center',
    });

    expect(
      applyRemsToValues({
        flex: undefined,
        justifyContent: 'center',
        alignItems: 'baseline',
        style: {flex: 2},
      }).style,
    ).toEqual({
      flex: 2,
      alignItems: 'baseline',
      justifyContent: 'center',
    });
  });
});
