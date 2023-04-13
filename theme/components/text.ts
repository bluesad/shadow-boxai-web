import { defineStyle } from '@chakra-ui/react';

export default defineStyle({
  baseStyle: {
    color: 'black',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '22px',
  },
  variants: {
    'normal-bold': {
      fontWeight: 500,
    },
  },
});
