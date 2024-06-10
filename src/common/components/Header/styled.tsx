import { styled } from '@mui/material';
import { LuMenu } from 'react-icons/lu';

const StyledHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
}));

const StyledMenuBtn = styled(LuMenu)(({ theme }) => ({
  width: '2.4rem',
  height: '2.4rem',
  cursor: 'pointer',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export { StyledHeader, StyledMenuBtn };
