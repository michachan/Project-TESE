import { theme as proTheme } from '@chakra-ui/pro-theme';
import {
  extendBaseTheme,
  extendTheme,
  theme as baseTheme,
} from '@chakra-ui/react';

export const theme = extendTheme({
  ...baseTheme,
  ...extendBaseTheme(proTheme),
});
