import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  transition: 'all 0.3s ease',
  color: theme.palette.grey[400],
  '&::before': {
    content: '""',
    pointerEvents: 'none',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
    height: '100%',
    width: '100%',
    opacity: 0,
    transition: 'all 0.3s ease',
    zIndex: -10,
  },
  '&:hover': {
    color: theme.palette.grey[500],
  },
  '&:hover::before': {
    opacity: 1,
  },
  '&.active': {
    color: theme.palette.grey[500],
  },
}));

export { StyledNavLink };
