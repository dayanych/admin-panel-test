import { Box, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const StyledSection = styled('section')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    backgroundColor: theme.palette.grey[100],
  },
}));

const StyledLeftMenuBox = styled(Box)(({ theme }) => ({
  minWidth: 245,
  height: '100vh',
  display: 'flex',
  position: 'fixed',
  flexDirection: 'column',
  padding: theme.spacing(2),
  gap: theme.spacing(3),
  borderTopRight: `1px solid ${theme.palette.divider}`,
  borderTopRightRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up('md')]: {
    minWidth: 'max-content',
  },
}));

const StyledNav = styled('nav')(() => ({
  display: 'flex',
  flexGrow: 1,
}));

const StyledImageBox = styled(Box)(() => ({
  width: 60,
  height: 60,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1,
}));

const StyledImg = styled('img')(() => ({
  maxWidth: '100%',
  objectFit: 'contain',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  justifyContent: 'space-between',
  alignItems: 'left',
  [theme.breakpoints.up('md')]: {
    alignItems: 'center',
  },
}));

const StyledList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3.25),
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(4.25),
  },
}));

const StyledLink = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  alignItems: 'center',
}));

export {
  StyledSection,
  StyledLeftMenuBox,
  StyledNav,
  StyledImg,
  StyledBox,
  StyledImageBox,
  StyledList,
  StyledLink,
};
