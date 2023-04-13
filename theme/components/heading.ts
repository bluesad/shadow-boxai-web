import { defineStyle } from '@chakra-ui/react';

export default defineStyle({
  baseStyle: {
    color: 'black',
    fontWeight: '600',
  },
  variants: {
    m: {
      fontWeight: 600,
      fontSize: '28px',
      lineHeight: '39px',
    },
  },
});
