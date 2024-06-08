import { Box, Drawer, styled } from '@mui/material';

const StyledSection = styled('section')(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.grey[100],
  minHeight: '100vh',
}));

const StyledDrawer = styled(Drawer)(() => ({
  display: 'flex',
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
  },
}));

const StyledMain = styled('main')(() => ({
  display: 'flex',
  flexGrow: 1,
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledLeftBox = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  [theme.breakpoints.down('lg')]: {
    position: 'fixed',
  },
}));

const StyledRightBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2, 2, 0, 2),
}));

export { StyledSection, StyledDrawer, StyledMain, StyledLeftBox, StyledRightBox };
