import { Box, Drawer, styled } from '@mui/material';

const StyledSection = styled('section')(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  [theme.breakpoints.up('md')]: {
    backgroundColor: theme.palette.grey[100],
  },
}));

const StyledDrawer = styled(Drawer)(() => ({
  display: 'flex',
}));

const StyledMain = styled('main')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledLeftBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    position: 'fixed',
  },
}));

const StyledRightBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2, 2, 0, 2),
}));

export { StyledSection, StyledDrawer, StyledMain, StyledLeftBox, StyledRightBox };
