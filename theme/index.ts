import { ChakraTheme, extendTheme } from '@chakra-ui/react';

import * as components from './components';

export default extendTheme({
  config: {
    cssVarPrefix: 'antipodal',
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      '50': '#EDF1F7',
      '100': '#CED9E9',
      '200': '#AEC0DB',
      '300': '#8EA8CC',
      '400': '#6F8FBE',
      '500': '#4F76B0',
      '600': '#3F5F8D',
      '700': '#2F476A',
      '800': '#202F46',
      '900': '#101823',
    },
    sider: '#16425b',
    background: '#d9dcd6',
  },
  // NOTE: components is a module here, should deconstructed as object
  components: { ...components },
}) as ChakraTheme;
