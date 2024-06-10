import { Box, Button, styled } from '@mui/material';

const StyledTitleWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 4),
  gap: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    borderBottom: 'none',
  },
}));

const StyledFunctionalWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2, 1),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const StyledButton = styled(Button)(() => ({
  maxHeight: 36,
}));

export { StyledTitleWrapper, StyledFunctionalWrapper, StyledButton };
