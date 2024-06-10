import { Box, Button, Typography, styled } from '@mui/material';

const StyledMainWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  padding: theme.spacing(2, 4),
  gap: theme.spacing(1.5),
  alignItems: 'center',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.grey[50],
  },
}));

const StyledAvatarWrapper = styled(Box)(({ theme }) => ({
  width: 55,
  height: 55,
  [theme.breakpoints.up('md')]: {
    width: 65,
    height: 65,
  },
}));

const StyledAvatar = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '50%',
}));

const StyledContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

const StyledTitleWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: {
    alignItems: 'start',
    flexDirection: 'column',
    gap: theme.spacing(0),
  },
}));

const StyledTagsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.5),
  flexWrap: 'wrap',
  alignItems: 'center',
}));

const StyledTag = styled(Typography)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(0.5, 1),
  '&[data-admin]': {
    borderColor: '#5a57ff',
    color: '#5a57ff',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: 0,
  margin: theme.spacing(2, 2),
}));

export {
  StyledMainWrapper,
  StyledAvatarWrapper,
  StyledAvatar,
  StyledContentWrapper,
  StyledTitleWrapper,
  StyledTagsWrapper,
  StyledTag,
  StyledButton,
};
