import { Box, Button, MenuItem, OutlinedInput, Typography, styled } from '@mui/material';

const StyledWrapper = styled(Box)(({ theme }) => ({
  maxWidth: 525,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3, 3, 5),
}));

const StyledForm = styled(Box)(({ theme }) => ({
  maxWidth: 400,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  padding: theme.spacing(2, 0),
}));

const StyledSelectItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingRight: theme.spacing(3),
}));

const StyledTextPlaceholder = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[200],
  fontWeight: theme.typography.fontWeightLight,
}));

const StyledInput = styled(OutlinedInput)(({ theme }) => ({
  maxHeight: 60,
  borderRadius: theme.shape.borderRadius * 2,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  height: 60,
  borderRadius: theme.shape.borderRadius * 2,
}));

const StyledCloseButton = styled(Button)(({ theme }) => ({
  alignSelf: 'flex-end',
  height: 40,
  width: 40,
  minWidth: 40,
  padding: 0,
  color: theme.palette.grey[300],
  backgroundColor: theme.palette.secondary.light,
  borderRadius: theme.shape.borderRadius * 2,
  '&:hover': {
    color: theme.palette.secondary.contrastText,
  },
}));

export {
  StyledWrapper,
  StyledForm,
  StyledSelectItem,
  StyledTextPlaceholder,
  StyledInput,
  StyledButton,
  StyledCloseButton,
};
