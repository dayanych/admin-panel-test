import { Box, styled } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius * 2,
  maxWidth: 1135,
  width: '100%',
}));

export { StyledBox };
