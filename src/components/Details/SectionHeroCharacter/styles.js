import { styled } from '../../../styles';
import { Container } from '../../../styles/global';

export const StyleSectionHeroCharacter = styled('div', {
  marginTop: 98,
  height: 631,
  borderBottom: '1px solid rgba(255,255,255, 0.2)',

  [`${Container}`]: {
    display: 'flex',
    alignItems: 'center',
    gap: 32,
    borderLeft: '1px solid rgba(255,255,255, 0.2)',
    borderRight: '1px solid rgba(255,255,255, 0.2)',
  },
  '.image': {
    width: '100%',
    height: '100%',
    maxWidth: 486,
    borderRadius: 5,
    overflow: 'hidden',
    img: {
      borderRadius: 5,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  '.info': {
    flex: 1,
    display: 'flex',

    span: {
      position: 'relative',
      fontWeight: 400,
      fontSize: 18,
      lineHeight: '27px',
      color: '#acabc299',
      paddingRight: 19,
      marginRight: 22,
      marginTop: 20,

      '&:before': {
        content: '',
        position: 'absolute',
        top: -7,
        right: 0,
        width: 4,
        height: 46,
        backgroundColor: '$red800',
      },
    },

    '.text': {
      width: '100%',
      maxWidth: 520,
      flex: 1,

      h1: {
        fontWeight: 600,
        fontSize: 61,
        lineHeight: '71px',
        color: '$white',
        marginBottom: 13,
      },
      p: {
        width: '100%',
        maxWidth: 385,
        fontWeight: 400,
        fontSize: 16,
        lineHeight: '24px',
        color: '$gray400',
      },
    },
  },
});
