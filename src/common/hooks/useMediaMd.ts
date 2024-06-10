import { useMediaQuery, useTheme } from '@mui/material';

export const useMediaMd = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return matches;
};
