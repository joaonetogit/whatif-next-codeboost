import { styled } from '../../styles';
import { Container } from '../../styles/global';

export const FooterStyle = styled('div', {
  padding: '40px 0',
  borderTop: '1px solid rgba(255,255,255, 0.2)',

  [`${Container}`]: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    '& > div': {
      display: 'flex',
      alignItems: 'flex-start',

      strong: {
        fontWeight: 700,
        fontSize: 14,
        lineHeight: '21px',
        color: '$white',
      },

      p: {
        maxWidth: 593,
        flex: 1,
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '21px',
        color: '$gray500',
        marginLeft: 183,
      },
    },
  },
});
