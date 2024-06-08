import { Box, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const StyledSection = styled('section')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    backgroundColor: theme.palette.grey[100],
  },
}));

const StyledLeftMenuBox = styled(Box)(({ theme }) => ({
  minWidth: 245,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  padding: theme.spacing(2),
  gap: theme.spacing(3),
  borderTopRight: `1px solid ${theme.palette.divider}`,
  borderTopRightRadius: theme.shape.borderRadius * 2,
  backgroundColor: '#fff',
  [theme.breakpoints.up('lg')]: {
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
  [theme.breakpoints.up('lg')]: {
    alignItems: 'center',
  },
}));

const StyledList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3.25),
  [theme.breakpoints.up('lg')]: {
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
