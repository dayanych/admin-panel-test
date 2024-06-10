import { Dialog, styled } from '@mui/material';

const StyledDialog = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    maxWidth: 525,
    width: '100%',
  },
}));

export { StyledDialog };
